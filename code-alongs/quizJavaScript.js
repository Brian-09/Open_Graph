// This variable will be used to keep track of the user's score.
let score = 0

// The user will be asked ten questions by the program
// The program will tell the user if they're right or wrong
// If the user is right, it'll increase the score by 1
let answer1 = prompt("What is 1 + 1?")
if(answer1 == "2"){
    console.log("Good Job!")
    score++
}else{
    console.log("WRONG :(")
}


let answer2 = prompt("What is 7 - 3?")
if(answer2 == "4"){
    console.log("Good Job!")
    score++
}else{
    console.log("WRONG :(")
}


let answer3 = prompt("What is 24 / 2?")
if(answer3 == "12"){
    console.log("Good Job!")
    score++
}else{
    console.log("WRONG :(")
}


let answer4 = prompt("What is 15 * 3?")
if(answer4 == "45"){
    console.log("Good Job!")
    score++
}else{
    console.log("WRONG :(")
}


let answer5 = prompt("What is 3 + 6 - 2?")
if(answer5 == "7"){
    console.log("Good Job!")
    score++
}else{
    console.log("WRONG :(")
}


let answer6 = prompt("What is 8 - 2 * 2?")
if(answer6 == "4"){
    console.log("Good Job!")
    score++
}else{
    console.log("WRONG :(")
}


let answer7 = prompt("What is 9 * 9 + 1?")
if(answer7 == "82"){
    console.log("Good Job!")
    score++
}else{
    console.log("WRONG :(")
}


let answer8 = prompt("What is (3 * 2) + (4 * 1)?")
if(answer8 == "10"){
    console.log("Good Job!")
    score++
}else{
    console.log("WRONG :(")
}


let answer9 = prompt("What is (12 * 12) + (2 - 1)?")
if(answer9 == "145"){
    console.log("Good Job!")
    score++
}else{
    console.log("WRONG :(")
}


let answer10 = prompt("What is 100 + (274 - 36) * (18 + 33)?")
if(answer10 == "12238"){
    console.log("Good Job!")
    score++
}else{
    console.log("WRONG :(")
}

// This tells the user what their total score is
// If they get ten out of ten, they'll be congratulated
console.log("Your final score is...")
console.log(score + " out of 10")
if (score == 10){
    console.log("Perfect!!")
}