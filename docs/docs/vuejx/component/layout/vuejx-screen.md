# vuejx-screen

## vuejx-screen
| field type | Name           | Value type | Mô tả |
| :--------- | :------------- | :--------- | :---- |
| properties | customRedirect | Boolean    |       |

```html
<vuejx-screen  grid_class="grid grid-cols-4 gap-2 p-2 pb-0"
  ref="detail_component" :collection="collection" :config="formConfig"
  @dataChange="changeData" @pingDone="pingDone" 
  v-model="vuejxData" :demoaction="demoActionConfig" :customRedirect="true">
  <template v-slot:array_YeuCauHoanThien="{ dataArrayModel, processArrayDelete, item }" :key="">
    <div class="vuejx__table" v-if="dataArrayModel && dataArrayModel.length > 0">
      <table class="vuejx__table___comp done___loading border-b w-full bg-white">
        <thead class="w-full">
          ...
        </thead>
        <tbody class="border-b w-full bg-white">
          ...
        </tbody>
      </table>
    </div>
  </template>

  <template v-slot:table_view_NhiemVuDuAn="{celldata}">
    <div>
      <vuejx-autocomplete :config="{
            model: 'ChucDanhNhiemVu',
            placeholder: 'Chọn chức danh nhiệm vụ',
            modelView: 'object', label_class: '', multiple: false,
            chips: false, required: false,
            label: '', object: true, itemText: '_source.TenMuc', itemValue: '_source.MaMuc',
            link: [ { db: 'CSDL_KHOAHOCCONGNGHE', collection: 'C_ChucDanhNhiemVu', condition: [] } ],
            column: ['MaMuc', 'TenMuc', 'type'], sort: [ '_score' ],
        }" :data="celldata._source" v-model="celldata._source">
      </vuejx-autocomplete>
    </div>
  </template>

  <template v-slot:bottom="{ dataFormX }">
    <mt-quan-trac class="col-span-4" :ChiTieuQuanTrac="dataFormX.ChiTieuQuanTrac"
     collection="T_KetQuaQTMTDinhKyDN"></mt-quan-trac>
  </template>


  <template v-slot:action>
    <!-- custom action -->
  </template>
</vuejx-screen>
```

## props
```js
vm.demoActionConfig = [
  {
    action: 'Lưu',
    access: [
      "role_can_view"
    ],
    dest: {
      TrangThai: {
        _source: {
          MaMuc: '01',
          TenMuc: 'Hiệu lực',
          type: 'C_TrangThaiQuyTrinh'
        }
      },
      'MoiTruongCoSo': {
        MaDinhDanh: maDinhDanhCoSo
      }
    }
  }, ...formConfig.deleteAction ? [{
    action: 'Xóa',
    class: 'bg-red-700 leading-none font-semibold text-white mx-2 rounded px-4 py-2 focus:outline-none',
    ignore_query: ['_id'],
    confirm: 'Xác nhận lưu kho chính thức.',
    dest: {
      storage: 'trash'
    }
  }] : [], {
    "action": "Duyệt",
    "access": [
      "LANH_DAO_CO_QUAN_QUAN_LY"
    ],

    // yêu cầu dữ liệu TrangThai._source.MaMuc = 04
    "input": {
      "key": "TrangThai._source.MaMuc",
      "value": [
        "04"
      ]
    },
    "dest": {
      "TrangThai": {
        "_source": {
          "MaMuc": "06",
          "TenMuc": "Đã duyệt",
          "type": "C_TrangThaiQuyTrinh"
        }
      }
    },
    "ext_field": {
      "title": "Ý kiến lãnh đạo",
      "class": "w-full custom-modal-component",
      "value": [
      {
        "model": "YKien",
        "label": "Ý kiến lãnh đạo",
        "required": true,
        "type": "textarea",
        "class": "col-span-4"
      }]
    }
  }
]
```