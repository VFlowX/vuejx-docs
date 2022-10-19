## Upload

```js
<vuejx-upload
  :editable="true"
  id="uploadGiayPhepKDVT"
  :uploadUrl="'/security/uploads/T_ChuDauTu'" //bucket upload
  :multiple="true" //multiple files upload
  :maxFiles="10"
  accept=".jpeg, .jpg, .png" //limit default file type
  helpText="Đính kèm hình ảnh chữ ký" //label
  v-model:data="vuejxData"
  :config="{
    model: 'AnhKySo'
  }"
  @done_upload="doneUpload" // after successful upload
>
</vuejx-upload>
```
