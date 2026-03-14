const person = {
    name: "Giorgi",
    age: 25,
    city: "Tbilisi"
};

console.log(person.name);
console.log(person.age);
console.log(person.city);

console.log(person["name"]);
console.log(person["age"]);
console.log(person["city"]);




const car = {
    brand: "BMW",
    model: "M5",
    year: 2020
};

console.log(car.brand);
console.log(car.year);

console.log(car["brand"]);
console.log(car["year"]);







const user = {
    name: "Nika",
    sayHello() {
        console.log("Hello");
    }
};
user.sayHello();