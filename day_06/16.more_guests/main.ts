let guestsList: string[] = ["Ramisa", "Misbah", "Wardah", "Mehak"];
console.log("Good News! I found a bigger dinner table!");
let dontCome = guestsList [0];
console.log(`${dontCome}, can't come`);
guestsList.splice(0,1, "Sobia");
guestsList.splice(2,0, "Mahnoor");

guestsList.unshift("Laiba");
guestsList.push("Fatima");
guestsList.forEach(guestList => {console.log(`Dear ${guestList}, would you like to join me for dinner?`)});

