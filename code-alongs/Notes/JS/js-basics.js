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


let pen = true;
let paper = false;
let mouse = true;
let keyboard = true;
if (pen && paper || mouse && keyboard) {
    console.log("You can take notes");
}

let stayedUpLate = false;
let tooMuchGaming = false;
let skippedBreakfast = true;
if (!stayedUpLate && !tooMuchGaming && !skippedBreakfast) {
    console.log("A healthy lifestyle");
} else {
    console.log("Not very healthy");
}

// if (null || 2 || undefined) {
//     alert("Two should be true");
// }


let location = null;
let geoLocation;
console.log(geoLocation ?? "Not a valid geo location");
let newLocation = location ?? "Arizona";
console.log(newLocation);

for (let i = 0; i < 5; i++) {
    console.log(parseInt(Math.random() * 100));
}

for(let i = 10; i > 1; i--) {
	console.log(`This has happened ${i} times`);
}

for(let i = 5; i <= 13; i+=2) {
    console.log(i);
}

for(let i = 1; i < 14; i++) {
    if (i == 5 || i == 7 || i == 9 || i == 11 || i == 13) {
        console.log(i);
    }
}

for(let i = 5; i < 12; i++) {
    console.log("increment " + i);
}

for(let i = 0; i < 9; i++) {
    console.log("this is nice");
}

for(let i = 11; i >= 1; i-=2) {
    console.log(i);
}


let i = 0;
while(i < 3) { //shows 0, then 1, then 2
	console.log(i);
    i++;
}

let i = 0;
do {
	console.log(i);
	i++;
} while (i < 3);

let classes = 12;
for(let i = 0; i < classes; i++){
    if(i==7){
        console.log("The Next Frontier");
        continue;
    }
    console.log(i);
    console.log("This should always print");
}

// outer: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 5; j++) {
//         let input = prompt("What is your name");
//         if (input.length > 0) {
//             break outer;
//         }
//     }
// }
*/

let ages = [5,12,18,21,58];
console.log(ages[4]);
console.log(ages[5]);
for (let i = 0; i < ages.length; i++) {
    console.log(ages[i]);
}

let colors = ["red", "green", "orange", "yellow", "blue"];
colors[4] = "purple";
console.log(colors);
colors.push("salmon");
console.log(colors);
colors.push("seafoam green");
console.log(colors);
colors.pop();
console.log(colors);
colors.shift();
console.log(colors);
colors.unshift("crimson","forest","lavender");
console.log(colors);

for(let a of colors) {
    a += " - Solid";
    console.log(a);
}


//Step 1
let music = ["jazz", "blues"];
//Step 2
music.push("R&B");
//Step 3
if (music.length % 2 !== 0) {
    const middleIndex = Math.floor(music.length / 2);
    music[middleIndex] = "none";
}
//Step 4
const middleIndex = Math.floor(music.length / 2);
music.splice(1, 0, "classic");
//Step 5
music.unshift("rap","acapella");
//Output
console.log(music);

//Spread Operator ...
let b = ["Phineas", "Ferb", "Perry", "Doofenshmirtz", "Isabella", "Candace"];
let c = ["Jake", "Finn", "LSP", "Marceline", "Princess Bubblegum", "Lemonheads"];
let e = ["BMO", "The Lich", "Flame Princess", ...c];
console.log(e);
let f = [...b, ...c];
console.log(f);

let words = "Who would stop talking first Rohan Monte or Justin Case. The real problem is always those weird meat like people with feet and more opinions than needed.";
// let newWords = words.split("i");
// console.log(newWords[2]);
// console.log(typeof newWords);
// let g = newWords.join(" ");
// console.log(g);

let wordArray = words.split(" ");
for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] == "first") {
        wordArray[i] = "ever";
    }
    if (wordArray[i] == "feet") {
        wordArray[i] = "pain";
    }
}
let betterWords = wordArray.join("-");
console.log(betterWords);

// let box1 = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31]; 
// let box2 = [2,3,6,7,10,11,14,15,18,19,22,23,26,27,30,31];
// let box3 = [4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31];
// let box4 = [8,9,10,11,12,13,14,15,24,25,26,27,28,29,30,31];
// let box5 = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];