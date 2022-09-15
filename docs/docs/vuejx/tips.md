# Snippet
::: warning
Tài liệu đang được cập nhật (WIP).
:::

## Thay đổi form theo điều kiện dữ liệu
```js
async pingDone(data) {
  let vm = this;
  if (vm.view == 'phat_sinh_ctnh' && data.PhuongPhapXuLy?._source?.MaMuc == '9999') {
    let { length } = vm.$refs.detail_component.formJSON;
    vm.$refs.detail_component.formJSON[length-1] = {
      model: 'PhuongPhapXuLyKhac',
      label: 'Phương pháp xử lý khác',
      type: 'textarea',
      "class": "col-span-4"
    }
  }
},
async changeData(data) {
  let vm = this;
  if (vm.view == 'phat_sinh_ctnh' && data.key == 'PhuongPhapXuLy') {
    let d = data.data
    if (d.PhuongPhapXuLy?._source?.MaMuc == '9999') {
      if (vm.$refs.detail_component?.formJSON) {
        let { length } = vm.$refs.detail_component.formJSON;
        vm.$refs.detail_component.formJSON[length-1] = {
          model: 'PhuongPhapXuLyKhac',
          label: 'Phương pháp xử lý khác',
          type: 'textarea',
          "class": "col-span-4"
        }
      }
    }
    else {
      if (vm.$refs.detail_component?.formJSON) {
        vm.$refs.detail_component.formJSON
        let i = vm.$refs.detail_component.formJSON.findIndex(x => x.model ==="PhuongPhapXuLyKhac");
        if (i>-1) {
          vm.$refs.detail_component.formJSON.splice(i, 1)
        }
      }
    }
  }
},
```