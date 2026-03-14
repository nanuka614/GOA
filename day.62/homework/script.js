// ობიექტი იქმნება ფიგურიანი ფრჩხილებით {}
// ობიექტში ვწერთ key: value წყვილებს:)

const obj = {
    key1: value1,
    key2: value2
};




const me = {
    name: "Giorgi",
    age: 17,
    favoriteColor: "Blue",
    favoriteCar: "BMW M5"
};

console.log(me);



const myCar = {
    brand: "BMW",
    model: "M5 F90",
    year: 2022,
    color: "Black"
};

console.log(myCar);




const user = {
    name: "Luka",
    age: 20,
    hobby: "Football",
    favoriteColor: "Green"
};



console.log(user.name);    
console.log(user["name"]);



// მეთოდი არის ფუნქცია, რომელიც მოთავსებულია ობიექტის შიგნით.
// ანუ ობიექტის ქმედება/ფუნქცია.
// მაგალითად: user.sayHello() (duuh...)




const neymar = {
    name: "Neymar Jr",
    country: "Brazil",
    currentClub: "Al Hilal",
    previousClubs: ["Santos", "Barcelona", "PSG"],
    
    // მეთოდი (ფუნქცია ობიექტში)
    shouldPlay2026() {
        console.log("Yes, I think Neymar should play in the 2026 World Cup!");
    }
};

// მეთოდის გამოძახება
neymar.shouldPlay2026();

// ყველა value-ის დაბეჭდვა
console.log(neymar.name);
console.log(neymar.country);
console.log(neymar.currentClub);
console.log(neymar.previousClubs);