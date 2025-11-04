let age = Number(prompt("შეიყვანეთ თქვენი ასაკი:"));

if (age >= 18) {
    alert("თქვენ ხართ სრულწლოვანი ");
} 
else {
    alert("თქვენ ხართ არასრულწლოვანი ");
}





let a = Number(prompt("შეიყვანეთ პირველი რიცხვი:"));
let b = Number(prompt("შეიყვანეთ მეორე რიცხვი:"));

if (a >= 0) {
    console.log(`${a} არის დადებითი`);
} else {
    console.log(`${a} არის უარყოფითი`);
}

if (b >= 0) {
    console.log(`${b} არის დადებითი`);
} else {
    console.log(`${b} არის უარყოფითი`);
}







let operator = prompt("აირჩიეთ ოპერაცია (+, -, *, /, %):");
let num1 = Number(prompt("შეიყვანეთ პირველი რიცხვი:"));
let num2 = Number(prompt("შეიყვანეთ მეორე რიცხვი:"));

let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    result = num1 / num2;
} else if (operator === "%") {
    result = num1 % num2;
} else {
    result = "არასწორი ოპერატორია!";
}

console.log(`შედეგი: ${result}`);