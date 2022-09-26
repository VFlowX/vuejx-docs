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
  const data = await vm.$parent.sampleData(db, collection, referenceUid, objectId, keys, filterDetail);
```

### Ví dụ
```js 
vm.$parent.sampleData(vm.db, vm.collection, null, null, vm.projection, { 'MoiTruongCoSo._id': vm.id })
```

## formatDate
```js
  window.VueJX.formatDate(new Date(parseInt(date)))
```

## query elastic
```js
let reportQuery = [
  {
    list_T_CongTrinhBVMT_01: {
          report: false, type: "data", db: db, collection: 'T_CongTrinhBVMT',
          body: {
              "size": 1000,
              "_source": { includes: [] }, "sort": [{ "modifiedAt": "desc" }],
              "query": {
                  "bool": {
                      "filter": {  "match": {  "site": site }  },
                      "must": [
                          { "match": { "MoiTruongCoSo._source.MaDinhDanh": coSo_MaDinhDanh } },
                          {
                            match: {
                              'LoaiHinhChatThai._source.MaMuc': '01'
                            }
                          },
                          { "match": { "username": vm.user.username }  },
                          { match: {  NamBaoCao: new Date().getFullYear() } },
                          { "match": { "storage": 'regular' }  },
                      ]
                  }
              }
          }
      }
  },
];

const aggsData = await vm.$parent.dataReport(reportQuery);
```