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

<style>
  code  {
    white-space: pre-wrap !important;
  }
</style>