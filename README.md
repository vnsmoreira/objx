# objx
(*Project currently in development*)
> 
> A lightweight module that provides Objects with the main Array methods
<br>

## Importing
````javascript
import _ from '@vutils/objx'
````
<br>

## From array methods

### ForEach

````javascript
let products = {
  item1:{name:'itemOne',amount:20},
  item2:{name:'itemTwo',amount:25},
  item3:{name:'itemThree',amount:30}
};

_.forEach(products, (item, itemKey) => {
  console.log(item.name, itemKey);
});

// 'itemOne', 'item1'
// 'itemTwo', 'item2'
// 'itemThree', 'item3'
````

### Map

````javascript
let products = {
  item1:{name:'itemOne',amount:20},
  item2:{name:'itemTwo',amount:25},
  item3:{name:'itemThree',amount:30}
};

let result = _.map(products, item => item.amount * 2);

console.log(result);
// { item1: 40, item2: 50, item3: 60 };
````

### Some

````javascript
let objectA = { a: 20, b: 40, c: 60 };
let objectB = { a: 2, b: 4, c: 6 };
const isGreaterThanTen = value => value > 10;

let resultA = _.some(objectA, isGreaterThanTen);
let resultB = _.some(objectB, isGreaterThanTen);

console.log(resultA);
console.log(resultB);
// true;
// false
````

### Every

````javascript
let objectA = { a: 20, b: 40, c: 60 };
let objectB = { a: 20, b: 20, c: 8 };
const isGreaterThanTen = value => value > 10;

let resultA = _.every(objectA, isGreaterThanTen);
let resultB = _.every(objectB, isGreaterThanTen);

console.log(resultA);
console.log(resultB);
// true;
// false
````


### Concat

````javascript
let objectA = { name: 'Gina', age: 25 };
let objectB = { name: 'Amy', job: 'police officer' };

let result = _.concat(objectA, objectB);

console.log(result);
// { name: 'Amy', age: 25, job: 'police officer' };
````






