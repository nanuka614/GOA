let num = 120;
if (num > 100) {
    console.log("Number is greater than 100");
} else {
    console.log("Number is NOT greater than 100");
}


let username = "kocho";
if (username === "kocho") {
    console.log("Welcome back");
} else {
    console.log("Hello");
}


let age = 15;
if (age < 13) {
    console.log("child");
} else if (age >= 13 && age <= 17) {
    console.log("teen");
} else {
    console.log("adult");
}


let x = 0;
if (x === 0) {
    console.log("Number is zero");
} else {
    console.log("Number is NOT zero");
}


let pass = "mypassword";
if (pass.length > 8) {
    console.log("strong");
} else {
    console.log("weak");
}


console.log(12 % 5);


let a = 5;
let b = 7;
console.log(a !== b);


let n = 2;
n += 3;
n += 3;
n += 3;
console.log(n);


console.log(15 * 4 / 2);



let t1 = true;
let t2 = false;
console.log(t1 && t2);


let arr = [3, 6, 9, 12];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);


let list = ["js", "html", "css"];
for (let i = 0; i < list.length; i++) {
    console.log(i, list[i]);
}


let i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}


let counter = 5;
while (counter <= 20) {
    console.log(counter);
    counter++;
}


let total = 0;
let k = 1;
while (k <= 30) {
    if (k % 2 !== 0) {
        total += k;
    }
    k++;
}
console.log(total);



let n9 = 1;
while (true) {
    if (n9 % 9 === 0) {
        console.log(n9);
        break;
    }
    n9++;
}


let c = 0;
let t = 1;
while (t <= 40) {
    if (t % 3 === 0) {
        c++;
    }
    t++;
}
console.log(c);



let weather = "sunny";
switch (weather) {
    case "sunny":
        console.log("Sunny weather");
        break;
    case "rainy":
        console.log("Rainy weather");
        break;
    case "cloudy":
        console.log("Cloudy weather");
        break;
    default:
        console.log("Unknown");
}


let seasonNumber = 3;
switch (seasonNumber) {
    case 1:
        console.log("spring");
        break;
    case 2:
        console.log("summer");
        break;
    case 3:
        console.log("autumn");
        break;
    case 4:
        console.log("winter");
        break;
    default:
        console.log("invalid");
}


let transport = "bus";
switch (transport) {
    case "car":
        console.log("Car selected");
        break;
    case "bus":
        console.log("Bus selected");
        break;
    case "bike":
        console.log("Bike selected");
        break;
    default:
        console.log("Unknown transport");
}