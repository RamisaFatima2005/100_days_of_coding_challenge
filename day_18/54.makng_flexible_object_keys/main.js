"use strict";
function createFlexibleObject(key1, value1, key2, value2, key3, value3) {
    let flexibleObject = {};
    flexibleObject[key1] = value1;
    flexibleObject[key2] = value2;
    flexibleObject[key3] = value3;
    return flexibleObject;
}
let myFlexibleObject = createFlexibleObject("name", "ramisa", "age", "18", "hobby", "reading");
console.log(myFlexibleObject);
