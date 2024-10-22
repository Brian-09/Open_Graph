/*
let park = "Disney"
//Camel Case Example
let firstName = "Brian"
let lastName = "Verdugo"
console.log(firstName)
console.log(park)
console.log(typeof lastName)


let message = `I just
made my own
multi-line
message`
console.log(message)


let randName = "Brian"
let age = 16
let alive = true
let favFoods = ["mexican", "italian", "american"]
console.log(randName + " " + age + " " + alive + " " + favFoods)


let result = "Hired"
const nickName = "Carlos"
console.log("The person we interviewed yesterday named " +nickName+ " he was " + result)
//const is a variable that cannot be changed after its creation


let strangerName = "John"
let luckyNumber = 7
let winner = true
console.log(strangerName + " " + luckyNumber + " " + winner)


console.log(String(null))
console.log(String(true))
console.log(String(84))
console.log(String(false))


let age1 = 23, age2 = 56
let bf = "Jesse"
let thinksBF = "Dylan"
if(age1 > 22){
    console.log("They arent ancient yet")
}
if(bf != thinksBF){
    console.log("You need more friends")
}
if("15" === "15"){
    console.log("Your can read yay")
}


let stillAlive = true
let year = 2024
let groceries = ["Spaghetti", "Tomato sauce", "Cheese", "Meatballs"]
if(stillAlive == true){
    if(year == 2024){
        console.log("Yay")
    }
    console.log("Level 1")
}


let money = 25
if(0 <= money && money <= 20){
    console.log("Broke Netflix")
} else if (21 <= money && money <= 60){
    console.log("Movie theatre")
} else if (61 <= money && money <= 80){
    console.log("Dinner")
} else if (81 <= money && money <= 150){
    console.log("Sky Diving")
} else {
    console.log("Rich")
}

let num = 258
alert("This is proof")
console.log("I will live until I'm " + num)

input1 = 12
input2 = 24
console.log(`Comparing ${input1}(${typeof(input1)}) and ${input2}(${typeof(input2)})`)

console.log(`When compared with == is ${(input1 == input2)}`)


console.log("Hunny I shrunk the kids")


let num1 = 8542
let num2 = 995

function addNum(x,y){
    console.log(x+y)
}
addNum(num1,num2)

let newName = "Josh"
function name (namePar){
    console.log(namePar + " needs to go outside")
}
name(newName)


let test6 = "Bored"
let test5 = "bored"

console.log(Object.is(test6, test5))
*/

let value = 4

if (value == 4) {
    console.log("this is true")
}
if (value == 6) {
    console.log("wow")
} else {
    console.log("This is false")
}

if(value > 3) console.log("Woah, that is pretty cool");

let age = 21
let canDrink = (age >= 21) ? true : false;
console.log(canDrink);

let a = 1
let b = 2
let result = (a + b < 4) ? "Below" : "Over";
console.log(result);

let grade = 87
if (grade > 90) {
    letterGrade = 'A'
} else if (grade > 80) {
    letterGrade = 'B'
} else if (grade > 70) {
    letterGrade = 'C'
} else if (grade > 60) {
    letterGrade = 'D'
} else {
    letterGrade = 'F'
}
console.log(letterGrade)


let answer = "left";
switch (answer) {
    case "left":
        console.log("You're going left");
        // break;
    case "right":
        console.log("You're going right");
        break;
    default:
        console.log("You're going forward");
}

let message;
let login = "Director"
switch (login) {
    case "Employee":
        message = "Hello";
        break;
    case "Director":
        message = "Greetings";
        break;
    case "":
        message = "No login";
        break;
    default:
        message = "";
}
console.log(message);