type shape = {
    kind:"circle" | "rectangle";
    radius?:number;
    width?:number;
    height?:number;
}

let circle:shape = {
    kind:"circle",
    radius:4
};

let rectangle:shape = {
    kind:"rectangle",
    width: 10,
    height: 20
};

console.log(circle);
console.log(rectangle);