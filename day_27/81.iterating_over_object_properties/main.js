"use strict";
function object(obj) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}
;
object({ make: 'Suzuki', model: 'Mehran', year: 2009, color: 'Maroon' });
