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

### Concat

````javascript
let objectA = { name: 'Gina', age: 25 };
let objectB = { name: 'Amy', job: 'police officer' };

let result = _.concat(objectA, objectB);

console.log(result);
// { name: 'Amy', age: 25, job: 'police officer' };

````






