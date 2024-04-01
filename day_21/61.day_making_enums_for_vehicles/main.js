"use strict";
var vehicleCategories;
(function (vehicleCategories) {
    vehicleCategories[vehicleCategories["Cars"] = 0] = "Cars";
    vehicleCategories[vehicleCategories["Trucks"] = 1] = "Trucks";
    vehicleCategories[vehicleCategories["Motorcycles"] = 2] = "Motorcycles";
})(vehicleCategories || (vehicleCategories = {}));
console.log(vehicleCategories.Cars);
