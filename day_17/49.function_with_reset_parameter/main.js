"use strict";
function multipleHobbies(...hobbies) {
    hobbies.forEach(hobby => console.log((`i enjoy ${hobby}.`)));
}
multipleHobbies("reading", "writing", "driving");
