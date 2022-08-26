# Table

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
## vuejx-table-simple-khcn
::: info
Dùng để hiển thị dữ liệu thành bảng với dữ liệu mảng lấy từ DB
:::
| field type | Name         | Value type     | Mô tả                                      |
| :--------- | :----------- | :------------- | :----------------------------------------- |
| properties | db           | string         | Tên db lưu dữ liệu                         |
| properties | collection   | string         | Tên collection lưu dữ liệu                 |
| properties | sort         | array obj      | Sắp xếp dữ liệu (elastic)                  |
| properties | keywords     | array obj      | Key tìm kiếm elastic (cho thanh tìm chung) |
| properties | condition    | array obj      | Điều kiện lọc elastic                      |
| properties | crud         | Boolean        | Hiện nút thêm mới                          |
| properties | table_config | array obj      | Config view của bảng                       |
| properties | storage      | predefined obj | storage dữ liệu                            |
```html
<vuejx-table-simple-khcn :pagesize="15" db="CSDL_BAOCAODOANHNGHIEP" :collection="collection" :sort="[ { '_score': 'desc' } ]" :keywords="keywordsCfg" :queryFilter="re_calculator" :condition="condition" :crud="true" :filter_options="filter_options" :title="title" :table_config="table_config" :storage="{
      match: {
          storage: '01'
      }
  }>
  <template v-slot:cell_5="{ celldata }">
    <div class="flex flex-col">
      <button @click="toPage('danh_sanh_co_so', celldata)" class="text-xs whitespace-no-wrap font-semibold rounded border border-blue-700 bg-blue-700 text-white px-2 py-1 m-1 leading-none focus:outline-none hover:bg-white hover:text-blue-700">Xem chi tiết</button>
      <button @click="toPage('tao_bao_cao_5a', celldata)" class="text-xs whitespace-no-wrap font-semibold rounded border border-blue-700 bg-blue-700 text-white px-2 py-1 m-1 leading-none focus:outline-none hover:bg-white hover:text-blue-700">Tạo báo cáo</button>
      <button v-if="celldata._source.TrongKhuTapTrung" @click="toPage('bao_cao_doanh_nghiep', celldata)" class="text-xs whitespace-no-wrap font-semibold rounded border border-blue-700 bg-blue-700 text-white px-2 py-1 leading-none focus:outline-none hover:bg-white hover:text-blue-700 m-1">Xem báo cáo đã nộp</button>
    </div>
  </template>
</vuejx-table-simple-khcn>
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