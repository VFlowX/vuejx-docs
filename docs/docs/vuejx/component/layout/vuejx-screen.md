# vuejx-screen

## vuejx-screen
```html
<vuejx-screen  grid_class="grid grid-cols-4 gap-2 p-2 pb-0"
  ref="detail_component" :collection="collection" :config="formConfig"
  @dataChange="changeData" @pingDone="pingDone" 
  v-model="vuejxData" :demoaction="demoActionConfig">
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
  }, ... formConfig.deleteAction ? [{
      action: 'Xóa',
      class: 'bg-red-700 leading-none font-semibold text-white mx-2 rounded px-4 py-2 focus:outline-none',
      dest: {
        storage: 'trash'
      }
  }]: []]
```