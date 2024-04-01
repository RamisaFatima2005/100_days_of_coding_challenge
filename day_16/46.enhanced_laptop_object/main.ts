let laptop ={
    make: "hp",
    model: "core i5",
    year: 2009,
    describe:function() {
        console.log(`This laptop is ${this.year}, ${this.make}. ${this.model}.`);
    }
};
laptop.describe();