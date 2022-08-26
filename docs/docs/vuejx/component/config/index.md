::: warning
Tài liệu đang được cập nhật (WIP).
:::
# List config

| type         | Miêu tả                      | Chi tiết config               | Chi tiết component                   |
| :----------- | :--------------------------- | :---------------------------- | :----------------------------------- |
| text         | input text bt                | [Input](#text)                | [Input](../form/text)                |
| autocomplete | Chọn từ danh mục             | [autocomplete](#autocomplete) | [autocomplete](../form/autocomplete) |
| label        | Chỉ là text ốp class cho đẹp | [Label](#label)               | [Label](../form/label)               |
| textarea     | input textarea               | [Textarea](#textarea)         | [Textarea](../form/textarea)         |
| number       | input number                 | [number](#number)             | [number](../form/number)             |
| teleport     | teleport custom code         | [teleport](#teleport)         | [teleport](../form/teleport)         |
| table        | table custom code            | [table](#table)               | [table](../form/table)               |

## Text
```js
{
  model: "keyName",
  label: "Label hiện thị",
  required: true,
  type: "text", // number
  class: "col-span-1",
  label_class: "leading-tight pb-1 truncate"
}
```

## Number

### Config nhập số điện thoại
```js
{
  model: 'NamKetThucThucHien',
  label: 'Năm kết thúc',
  type: 'number',
  class: 'col-span-1',
  required: true,
  regexp: {
    flags: /(((+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.flags,
    source: /(((+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.source
  },
  pattern: /(((+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/,
  required_title: 'Bắt buộc nhập số'
}
```
### Config nhập số tiền có chấm sau 3 số
```js
{
    model: 'KinhPhiDuKien',
    label: 'Kinh phí dự kiến (VNĐ)',
    type: 'number',
    class: 'col-span-2',
    required: true,
    options: {
        prefix: '',
        suffix: '',
        decimal: '',
        thousand: '.',
        precision: 0,
        acceptNegative: true,
        isInteger: false
    },
    required_title: 'Bắt buộc nhập số'
}
```
## Autocomplete
```js
{
  model: 'LoaiNuocThai',
  label: 'Loại nước thải',
  type: 'autocomplete',
  class: 'col-span-1'
  label_class: "leading-tight pb-1 truncate",
  collection: 'C_LoaiHinhChatThai',
  column: ["MaDinhDanh", "TenGoi", "type", "ThuocDanhMucCha"], // không có mặc định MaMuc, TenMuc
  itemValue: '_source.MaDinhDanh',
  itemText: '_source.TenGoi',
  condition: [{
    match: {
      'ThuocDanhMucCha._source.MaMuc': '01'
    }
  }],
  defaultVal: {
    _source: {
      MaDinhDanh: '01',
      TenGoi: 'Chất thải lây nhiễm'
    }
  },
  sort: [{
    createdAt: 'asc'
  }],
}
```

## Table
```js
{
  label: "Thành viên hội đồng",
  title: "Thành viên hội đồng",
  model: "ThanhVienHoiDongXacDinhNhiemVu",
  type: "table",
  required: true,
  collection: "T_CaNhan",
  class: "col-span-4",
  placeholder: "tìm kiếm thành viên hội đồng",
  table_config: [
  {
    width: "",
    class: "text-left",
    title: "Họ và tên",
    value: "_source.HoVaTen",
    viewType: "text"
  },
  {
    width: "200",
    class: "text-left",
    title: "Chức danh trong hội đồng",
    value: "_source.ChucDanhHoiDong",
    viewType: "autocomplete",
    collection: 'C_ChucDanhHoiDong',
    model: 'ChucDanhHoiDong'
  }],
  filter_options: [
  {
    fields: "input",
    keyName: "Mã định danh",
    keyCode: "MaDinhDanh",
    model: "MaDinhDanh"
  },
  {
    fields: "input",
    keyName: "Họ và tên",
    keyCode: "HoVaTen",
    model: "HoVaTen"
  }],
  includes: ["MaDinhDanh", "HoVaTen", "ChucDanhHoiDong"],
  keywordsCfg: [
    MaDinhDanh.raw,
  ],
  re_calculator: [
  {
    key: "MaDinhDanh",
    relation: "eq"
  }],
  condition: [{
    match: {
      'LoaiChuyenGia._source.MaMuc': '01'
    }
  }]
},
```