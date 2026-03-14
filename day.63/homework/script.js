const user = {
    age: 17,

    checkStatus() {
        return this.age >= 18 ? "Adult" : "Minor";
    }
};

console.log(user.checkStatus());






const car = {
    speed: 150,

    checkSpeed() {
        return this.speed > 120 ? "Too fast" : "Speed okay";
    }
};

console.log(car.checkSpeed());




const student = {
    score: 42,

    checkResult() {
        return this.score >= 50 ? "Passed" : "Failed";
    }
};

console.log(student.checkResult());





const student1 = {
    score: 42,

    checkResult() {
        return this.score >= 50 ? "Passed" : "Failed";
    }
};

console.log(student1.checkResult());






//?
const repeater = {
    text: "Hello",
    count: 5,

    repeatText() {
        let i = 0;

        while (i < this.count) {
            console.log(this.text);
            i++;
        }
    }
};

repeater.repeatText();