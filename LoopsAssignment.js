/*
Part 1:
Looping Basics
*/

//The for loop starts at 1, increases by 1 each loop, and ends at 51
for (let i = 1; i < 51; i++) {
    //This will print the current value of i
    console.log(i);
}

//The while loop starts at 1, increases by 2 each loop, and ends after 20
let i = 1;
while (i <= 20) {
    //This will print the value of i whenever it's an even number
    if (i%2 == 0) {
        console.log(i);
    }
    i++;
}

//The do... while loop starts at 10, decreases by 1 each loop, and ends after 1
i = 10;
do {
    //This will alert and print the current value of i
    //alert(i);
    console.log(i);
    i--;
} while (i > 0);

/*
Part 2:
Nesting Loops
*/

//Both loops go through numbers 1-5, inclusive
for (let i = 1; i < 6; i++) {
    for (let j = 1; j < 6; j++) {
        //solution will have the value of the product of i and j
        let solution = i * j;
        //prints an equation showing the product of i and j
        console.log(`${i} x ${j} = ${solution}`);
    }
}

//The external loop will loop everytime a new row is being created
for (let i = 1; i < 5; i++) {
    //A string is created to represent a row
    let triangePattern = "";
    //The internal loop adds the correct amount of asterixs required for the current row
    for (let j = 1; j <= i; j++) {
        triangePattern += "*";
    }
    //The finished row is then printed
    console.log(triangePattern);
}

/*
Part 3:
Converting Loops
*/

//The difference between this while loop and the first for loop is that
//the increment is created outside the loop and the code within the loop
//increases the increment's value
i = 1;
while (i < 51) {
    console.log(i);
    i++;
}

//The difference between this for loop and the first while loop is that
//the increment's initial value and the value that it increases by are
//both created within the for loop's parameters
for (let i = 1; i <=20; i++) {
    if (i%2 == 0) {
        console.log(i);
    }
}