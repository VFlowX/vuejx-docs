<style>
  code  {
    white-space: pre-wrap !important;
  }
</style>

## sampleData

::: info
Lấy dữ liệu từ DB
:::

### Props

| type         | Miêu tả                      | Chi tiết config               | Chi tiết component                             |
| :----------- | :--------------------------- | :---------------------------- | :--------------------------------------------- |
| text         | input text bt                | [Input](#text)                | [Input](../component/form/text)                |
| autocomplete | Chọn từ danh mục             | [autocomplete](#autocomplete) | [autocomplete](../component/form/autocomplete) |
| label        | Chỉ là text ốp class cho đẹp | [Label](#label)               | [Label](../component/form/label)               |
| textarea     | input textarea               | [Textarea](#textarea)         | [Textarea](../component/form/textarea)         |
| number       | input number                 | [number](#number)             | [number](../component/form/number)             |
| teleport     | teleport custom code         | [teleport](#teleport)         | [teleport](../component/form/teleport)         |
| table        | table custom code            | [table](#table)               | [table](../component/form/table)               |

### Tổng quát

```js
const data = await window.Vue.sampleData(db, collection, referenceUid, objectId, keys, filterDetail);
```

### Ví dụ

```js
window.Vue.sampleData(vm.db, vm.collection, null, null, vm.projection, { 'MoiTruongCoSo._id': vm.id });
```

## formatDate

```js
window.VueJX.formatDate(new Date(parseInt(date)));
```

## query elastic

```js
let reportQuery = [
  {
    list_T_CongTrinhBVMT_01: {
      report: false,
      type: 'data',
      db: db,
      collection: 'T_CongTrinhBVMT',
      body: {
        size: 1000,
        _source: { includes: [] },
        sort: [{ modifiedAt: 'desc' }],
        query: {
          bool: {
            filter: { match: { site: site } },
            must: [
              { match: { 'MoiTruongCoSo._source.MaDinhDanh': coSo_MaDinhDanh } },
              {
                match: {
                  'LoaiHinhChatThai._source.MaMuc': '01',
                },
              },
              { match: { username: vm.user.username } },
              { match: { NamBaoCao: new Date().getFullYear() } },
              { match: { storage: 'regular' } },
            ],
          },
        },
      },
    },
  },
];

const aggsData = await window.Vue.dataReport(reportQuery);
```

## submitData

```js
export async function submitData(dataForm, customRedirect, hasNoti) {
  let vm = this;
  if (hasNoti !== undefined && hasNoti !== null && hasNoti !== '') {
  } else {
    hasNoti = true;
  }
  let postData = dataForm;
  if (postData['site']) {
  } else {
    postData['site'] = vm.site;
  }
  let action = 'vuejx_manager/userCreate';
  if (postData._id !== undefined && postData._id !== null && postData._id !== '') {
    action = 'vuejx_manager/userUpdateById';
  }
  let dbPost = postData['PostDB'];
  let collectionPost = postData['PostCollection'];
  let actionCode = postData['actionCode'];
  delete postData['actionCode'];
  delete postData['PostCollection'];
  delete postData['PostDB'];
  if (dbPost !== undefined && dbPost !== null && dbPost !== '') {
    await window.VueJX.dispatch(action, {
      db: localStorage.getItem('db'),
      collection: collectionPost,
      body: postData,
      actionCode: actionCode,
    })
      .then((response) => {
        if (response.data !== undefined && response.data.insertedId !== undefined) {
          dataForm['_id'] = response.data.insertedId;
          if (customRedirect) {
            /*
                vm.$emit("afterSubmit", {
                    insertedId: response.data.insertedId,
                });
                */
          } else {
            window.Vue.redirect(
              [
                {
                  key: '_id',
                  value: response.data.insertedId,
                },
                {
                  key: 't',
                  value: new Date().getTime(),
                },
              ],
              true,
            );
          }
        } else {
          if (customRedirect) {
            /*
                vm.$emit("afterSubmit", {
                modifiedCount: 1,
                });
                */
          } else {
            window.Vue.redirect(
              [
                {
                  key: 't',
                  value: new Date().getTime(),
                },
              ],
              true,
            );
          }
        }
        if (hasNoti) {
          window.Vue.toastr.success('Thành công.');
        }
      })
      .catch((err) => {
        if (hasNoti) {
          window.Vue.toastr.error('Error.');
        }
      });
  }
}
```

## sampleData

```js
export async function sampleData(db, collection, referenceUid, objectId, keys, filterDetail) {
  let vuejx_form_data = {};
  const queryRouter = window.Vue.router.currentRoute.value.query;
  if (filterDetail) {
    vuejx_form_data = {};
    if (db && collection) {
      await window.VueJX.dispatch('vuejx_manager/userOne', {
        db: localStorage.getItem('db'),
        collection: collection,
        keys: keys,
        filter: filterDetail,
        skip: 0,
      })
        .then((data) => {
          if (data) {
            vuejx_form_data = data;
          }
        })
        .catch(() => {
          vuejx_form_data = {};
        });
    }
  } else {
    let rawReferenceUid = queryRouter['referenceUid'];
    if (referenceUid) {
      rawReferenceUid = referenceUid;
    }
    if (objectId && String(objectId) === 'true') {
      rawReferenceUid = null;
    }
    if (!queryRouter['_id'] || queryRouter['_id'] === 'NULL') {
      vuejx_form_data = {};
    }
    if (queryRouter['_id'] && queryRouter['_id'] !== 'NULL' && !rawReferenceUid) {
      vuejx_form_data = {};
      if (db && collection) {
        await window.VueJX.dispatch('vuejx_manager/userById', {
          db: localStorage.getItem('db'),
          collection: collection,
          id: queryRouter['_id'],
          keys: keys,
        })
          .then((data) => {
            if (data) {
              vuejx_form_data = data;
            }
          })
          .catch(() => {
            vuejx_form_data = {};
          });
      }
    } else if (rawReferenceUid) {
      vuejx_form_data = {};
      if (db && collection) {
        await window.VueJX.dispatch('vuejx_manager/userOne', {
          db: localStorage.getItem('db'),
          collection: collection,
          keys: keys,
          filter: {
            referenceUid: rawReferenceUid,
          },
          skip: 0,
        })
          .then((data) => {
            if (data) {
              vuejx_form_data = data;
            }
          })
          .catch(() => {
            vuejx_form_data = {};
          });
      }
    }
  }

  let dotObject = {};
  if (vuejx_form_data) {
    dotObject = await window.Vue.flattenKeys(vuejx_form_data, null, true);
  }
  return dotObject;
}
```
