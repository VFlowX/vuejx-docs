
# 1. input:
::: info
  Normal html input
:::

## 1.1. Remove space
::: info
  Nhập liệu bỏ space để nhập mã, email ...
:::
```html
<input @input="data = removeEventSpaces($event)" :value="data"
 @keydown.space.prevent @paste="removeEventSpaces"/>
```
```js
removeEventSpaces (e) {
  e.target.value = e.target.value.replace(/ /g, '');
  return e.target.value;
},
```