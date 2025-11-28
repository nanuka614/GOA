/* 1) ორი ცვლადი სიგრძე და სიგანე */
let length = 5;
let width = 5;

/* 2) switch-ით გავიგოთ კვადრატია თუ არა */
switch(length === width) {
    case true:
        console.log("ეს ფიგურა არის კვადრატი");
        break;
    case false:
        console.log("ეს ფიგურა არ არის კვადრატი");
        break;
}

/* 4) case და switch ახსნა */
/*
switch გამოიყენება მრავალ პირობითი შემოწმებისთვის.
case არის კონკრეტული პირობა, რომლის შესრულების შემთხვევაში შესრულდება მისი ბლოკი.
*/

/* 5) break ახსნა */
/*
break გამოიყენება switch-ის ან loop-ის გაჩერებისთვის,
რათა შემდგომი code block არ შესრულდეს.
*/

/* 6) default ახსნა */
/*
default არის fallback შემთხვევა, ანუ თუ არცერთი case არ შეესაბამა,
შესრულდება default-ის ბლოკი.
*/

/* 7) რიცხვის შემოწმება: 0, >0, <0 */
let userNumber = -3;
switch(true) {
    case userNumber === 0:
        console.log("რიცხვი არის 0");
        break;
    case userNumber > 0:
        console.log("რიცხვი არის 0-ზე მეტი");
        break;
    default:
        console.log("რიცხვი არის უარყოფითი");
}

/* 8) კვირის დღეები */
let dayNumber = 3;
switch(dayNumber) {
    case 1: console.log("ორშაბათი"); break;
    case 2: console.log("სამშაბათი"); break;
    case 3: console.log("ოთხშაბათი"); break;
    case 4: console.log("ხუთშაბათი"); break;
    case 5: console.log("პარასკევი"); break;
    case 6: console.log("შაბათი"); break;
    case 7: console.log("კვირა"); break;
    default: console.log("არასწორი რიცხვი");
}

/* 10) for loop სინტაქსი */
// for(შექმნა; პირობა; ცვლილება) { /* code block */ }

/* 11) 0-დან 10-მდე რიცხვები */
for(let i = 0; i <= 10; i++) {
    console.log(i);
}

/* 12) რიცხვი N-მდე */
let N = 7;
for(let i = 1; i <= N; i++) {
    console.log(i);
}

/* 13) while loop ახსნა */
/*
while loop არის loop-ი, რომელიც ამუშავდება, სანამ პირობა სიმართლეა.
*/

/* 14) while loop 1-დან 10-მდე */
let w = 1;
while(w <= 10) {
    console.log(w);
    w++;
}

/* 15) მხოლოდ ლუწი რიცხვები 1-დან 20-მდე */
let num = 1;
while(num <= 20) {
    if(num % 2 === 0) {
        console.log(num);
    }
    num++;
}

/* 16) do...while loop ახსნა */
/*
do...while loop ჯერ ასრულებს code block-ს ერთხელ,
შემდეგ ამოწმებს პირობას. ასე რომ, loop ყოველთვის ერთხელ შესრულდება.
*/

/* 17) განსხვავება while და do...while შორის */
/*
while loop-ი: პირობა თავიდან შემოწმდება, შემდეგ შესრულდება ბლოკი.
do...while loop-ი: ბლოკი შესრულდება ერთხელ, შემდეგ შემოწმდება პირობა.
*/