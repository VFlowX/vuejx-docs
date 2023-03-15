# Javascript tips

## Chain condition
```js
'hello' && 'world' && '!!!'; // '!!!'
null && 'world'; // null
'abc' && '' && undefined && null // ''
'hello' || 'world'; // 'hello'
'' || false || undefined || 'world'; // 'world'
```

## Shorten if else
```js
condition ? actionIfTrue() : actionIfFalse();
//if you have only if condition you can use && operator
condition && actionIfTrue();
```

## Sleep in async function
```js
await new Promise(r => setTimeout(r, 2000));
```

## Nullish coalescing operator
```js
undefined ?? 'default'; // 'default '
```

## Loop array with index
```js
const array =["a", "b", "c"];
for (let [index, val] of array.entries()) {
  console.log(index, val)
}
// Result
// 0 'a'
// 1 'b'
// 2 'c'
```

## Open image in new tab
```js
openImagesInNewTab(base64) {
  let image = new Image();
  image.src = 'data:image/jpg;base64, ' + base64;
  image.style = 'width:100%'
  let imageWindow = window.open('_blank');
  imageWindow.document.write(image.outerHTML);
  imageWindow.document.title = 'Document title';
}
```
## Open pdf in new tab
```js
openPdfInNewTab(base64) {
  let pdfWindow = window.open("", "_blank");
  pdfWindow.document.write("<iframe width='100%' height='100%' src='data:application/pdf;base64," + encodeURI(base64) + "'></iframe>");
  pdfWindow.document.body.style.margin = '-2px';
  pdfWindow.document.title = 'Document title';
}
```
## Destructure Array Object
::: info
- credits: Wes Bos
:::
```js
const bikes = ["bianchi", "miele", "miyata", "benotto", "panasonic"];
//Lấy phần tử đầu/cuối của mảng
const { length, 0: first, [length - 1]: last } = bikes;
console.log(first, last); // bianchi, panasonic

// 1. You can use Object destructuring on an array, using index as a property
const { 2: middle } = bikes;
console.log(middle); // miyata

// 2. Arrays have a length property, which can be detructured along with
// indexes
const { 0: first, length } = bikes;
console.log(first, length); //bianchi, 5

// 3. Destructuring allows us to use it's variables righ inside
// Computed property names allows us to reference the length and 
// calculate the index of the last item
const { length, 0: first, [length - 1]: last } = bikes;
// We _can_ go bananas with this. Don't angry tweet me, I know 
// this is a bit much
const { length, [Math.floor(length / 2)]: middle } = bikes;
console.log(middle); //miyota
```

## Array Group By key
```js
var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
```
