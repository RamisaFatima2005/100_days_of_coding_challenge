function
createFlexibleObject(key1:string,value1:any,key2:string,value2:any,key3:string,value3:any){
    let flexibleObject:{[key:string]:any} = {};

    flexibleObject[key1] = value1;
    flexibleObject[key2] = value2;
    flexibleObject[key3] = value3;

    return flexibleObject;
}

let myFlexibleObject = createFlexibleObject("name","ramisa","age","18","hobby","reading");

console.log(myFlexibleObject);