/* 
1) ფუნქცია არის კოდის ბლოკი, რომელსაც შეუძლია შესრულდეს მხოლოდ მაშინ, როცა ჩვენ მას ვიძახებთ.
ფუნქციას შეუძლია მიღება არგუმენტების (input) და დაბრუნება შედეგის (output).
*/

/* 
2) განსხვავება Python-ის ფუნქციასა და JavaScript-ის ფუნქციას შორის:
- Python-ში ფუნქციები იწერება keywoord `def`-ით, JavaScript-ში `function` ან arrow function.
- JavaScript-ის ფუნქციებს შეუძლიათ შესრულება როგორც ობიექტებს და აქვთ ფუნქციური სქოპი.
- JavaScript-ში არსებობს ფუნქციის გამოხატულებები, closures და arrow functions, Python-ში მსგავსი სინტაქსი განსხვავებულია.
*/

// 3) ფუნქცია, რომელიც იღებს სახელს და ახსენებს მისასალმებლად
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Kocho"); // მაგ.

// 4) ფუნქცია, რომელიც იღებს 4 რიცხვს და აბრუნებს მათ ჯამს
function sumFour(a, b, c, d) {
    return a + b + c + d;
}
console.log(sumFour(2, 4, 6, 8)); // მაგ.

/* 
5) განსხვავება ჩვეულებრივ ფუნქციასა და arrow function-ს შორის:
- Arrow function არ ქმნის საკუთარ `this` კონტექსტს, ჩვეულებრივი ფუნქცია კი ქმნის.
- Arrow function-ის სინტაქსი მოკლეა და ხშირად გამოიყენება მოკლე ფუნქციებისას.
- Arrow function-მა არ აქვს `arguments` ობიექტი, ჩვეულებრივ ფუნქციას აქვს.
*/

// 6) Arrow function, რომელიც შეამოწმებს რიცხვი ლუწია თუ კენტი
const isEven = (num) => {
    if (num % 2 === 0) {
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
};
isEven(7); // მაგ.
isEven(12); // მაგ.