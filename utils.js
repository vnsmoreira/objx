const utils = {};

/* default array methods */
utils.concat = (objectA, objectB) => {
  return { ...objectA, ...objectB };
};

utils.map = (object, callback) => {
  let resultObject = {};

  for (let itemKey in object) {
    let currentItem = object[itemKey];

    resultObject[itemKey] = callback(currentItem);
  }
  return resultObject;
};

utils.some = (object, callback) => {
  for (let itemKey in object) {
    let currentItem = object[itemKey];

    if (callback(currentItem)) return true;
  }

  return false;
};

utils.every = (object, callback) => {
  for (let itemKey in object) {
    let currentItem = object[itemKey];

    if (callback(currentItem)) return false;
  }

  return true;
};

utils.splice = (object, index, deleteCount, ...itemsToBeAdded) => {
  let arrayFromObject = Object.entries(object);
  arrayFromObject.splice(index, deleteCount, ...itemsToBeAdded);

  return Object.fromEntries(arrayFromObject);
};

utils.forEach = (object, callback) => {
  for (let itemKey in object) {
    let currentItem = object[itemKey];

    callback(currentItem, itemKey, object);
  }
};

utils.filter = (object, callbackExpression) => {
  let resultObject = {};

  for (let itemKey in object) {
    let currentItem = object[itemKey];

    if (callbackExpression(currentItem)) resultObject[itemKey] = currentItem;
  }

  return resultObject;
};

utils.sort = (object, target, callbackExpression) => {
  let orderedObject = {};

  if (object) {
    const selectTarget = (a, b) => (target == 'values' ? [a[1], b[1]] : [a[0], b[0]]);
    const callbackHandler = (a, b) => callbackExpression(...selectTarget(a, b));
    const orderedEntries = Object.entries(object).sort(callbackHandler);

    orderedObject = Object.fromEntries(orderedEntries);
  }

  return orderedObject;
};

utils.length = object => {
  return Object.entries(object).length;
};

utils.findIndex = (object, callback) => {
  let index = null;

  for (let itemKey in object) {
    let currentItem = object[itemKey];

    if (callback(currentItem)) return (index = itemKey);
  }
  return index;
};

/* extra object methods */

utils.isEmpty = object => {
  return Object.entries(object).length == 0;
};

utils.copy = object => {
  let copy = JSON.parse(JSON.stringify(object));

  return copy == null ? {} : copy;
};

utils.categorize = (object, callback) => {
  let categorizedObject = {};

  for (let itemKey in object) {
    let currentItem = object[itemKey];
    let category = callback(currentItem);

    if (!categorizedObject[category]) categorizedObject[category] = {};

    categorizedObject[category][itemKey] = currentItem;
  }

  return categorizedObject;
};

utils.create = (keyname, value) => {
  let obj = {};
  obj[keyname] = value;

  return obj;
};

utils.isEqual = (a, b) => {
  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  let isEqualArray = keysA.map(key => a[key] == b[key]);
  let isSomeDifferent = isEqualArray.some(isEqual => !isEqual);

  return !isSomeDifferent;
};

module.exports = utils;
