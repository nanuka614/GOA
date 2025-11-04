let name = prompt("შეიყვანე შენი სახელი:");

if (name === "გიორგი") {
    alert("ნაცნობია");
} else {
    alert("არ ვიცნობ ამ პიროვნებას");
}




// 2)
let num1 = Number(prompt("შეიყვანე პირველი რიცხვი:"));
let num2 = Number(prompt("შეიყვანე მეორე რიცხვი:"));

if (num1 > 0) {
    alert("პირველი რიცხვი დადებითია");
} else if (num1 < 0) {
    alert("პირველი რიცხვი უარყოფითია");
} else {
    alert("პირველი რიცხვი ნულია");
}

if (num2 > 0) {
    alert("მეორე რიცხვი დადებითია");
} else if (num2 < 0) {
    alert("მეორე რიცხვი უარყოფითია");
} else {
    alert("მეორე რიცხვი ნულია");
}





// 3)
let a = Number(prompt("შეიყვანე პირველი რიცხვი შედარებისთვის:"));
let b = Number(prompt("შეიყვანე მეორე რიცხვი შედარებისთვის:"));

if (a === b) {
    console.log("რიცხვები ტოლია");
} else if (a > b) {
    console.log("პირველი რიცხვი მეტია მეორეზე");
} else {
    console.log("მეორე რიცხვი მეტია პირველზე");
}




// 4) 
let symbol = prompt("შეიყვანე მათემატიკური სიმბოლო (+, -, *, /, %):");
let x = Number(prompt("შეიყვანე პირველი რიცხვი:"));
let y = Number(prompt("შეიყვანე მეორე რიცხვი:"));

if (symbol === "+") {
    console.log("შედეგი:", x + y);
} else if (symbol === "-") {
    console.log("შედეგი:", x - y);
} else if (symbol === "*") {
    console.log("შედეგი:", x * y);
} else if (symbol === "/") {
    console.log("შედეგი:", x / y);
} else if (symbol === "%") {
    console.log("შედეგი:", x % y);
} else {
    console.log("არასწორი სიმბოლოა!");
}