# Table
## [vuejx-table-simple-khcn](./vuejx-table-simple-khcn)
Xem chi tiết [tại đây](./vuejx-table-simple-khcn) 
## vuejx-table-simple-khcn-static
::: info
Dùng để hiển thị dữ liệu thành bảng với dữ liệu mảng từ custom data
:::
| type       | Name         | Mô tả                            |
| :--------- | :----------- | :------------------------------- |
| properties | items        | input Dữ liệu mảng để v-for loop |
| properties | table_config | config view dữ liệu cell         |
| properties | title        | Title bảng                       |
```html
<vuejx-table-simple-khcn-static
  class='cursor-pointer'
  :items="vuejxData.HoSoDeXuat" 
  title='Danh sách chuyên gia'
  :table_config="[
    { value: '_source.TenDeXuat', title: 'Tên đề xuất', class: 'text-left p-1' },
    { value: '_source.DonViDeXuat._source.TenToChuc', title: 'Đơn vị đề xuất', width: '180', class: 'text-left p-1' },
    { value: '_source.LoaiDeXuat._source.TenMuc', title: 'Loại đề xuất', width: '140', class: 'text-left p-1' },
    { value: '_source.ThoiGianThucHien', title: 'Thời gian thực hiện (tháng)', width: '100', class: 'text-center p-1' },
  ]">
</vuejx-table-simple-khcn-static>
```
## vuejx-view-khcn
::: info
Dùng để hiển thị dữ liệu object-key thành dạng bảng
:::
| field type | Name | Value type | Mô tả |
| :--------- | :--- | :--------- | :---- |

```html
<vuejx-view-khcn class="my-2" v-if="tabIndex==itemView.tabIndex" 
  v-bind:key="indexView" :mode="itemView.mode"
  :title="itemView.title" :dataResults="[]" 
  :table_config="itemView.table_config" :data="itemView.data"
  :footer_header="itemView.footer_header" :groupBy="itemView.groupBy" 
  :groupByKeyArray="itemView.groupByKeyArray">
</vuejx-view-khcn>
 ```
<style>
  code  {
    white-space: pre-wrap !important;
  }
</style>