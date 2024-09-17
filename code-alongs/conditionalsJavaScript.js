// Task 1
let temp = 72
if(temp > 85){
    console.log("It's hot")
}else if(temp < 60){
    console.log("It's cold")
}else{
    console.log("It's just right")
}

// Task 2
let score = 85
if(score >= 60){
    if(score >= 70){
        if(score >= 80){
            if(score >= 90){
                console.log("A")
            }else{
                console.log("B")
            }
        }else{
            console.log("C")
        }
    }else{
        console.log("D")
    }
}else{
    console.log("F")
}

// Task 3
let age = 16
let hasDriversLicense = false
if(age >= 16 && hasDriversLicense){
    console.log(true)
}else{
    console.log(false)
}

// Task 4
age = 21
let hasID = true
let isVIP = false
if(hasID){
    console.log("Access granted")
}else{
    if(age >= 21 && hasID){
        console.log("Access granted")
    }else{
        console.log("Access denied")
    }
}

// Task 5
age = 30
let isMember = false
let purchaseAmount = 56
if(isMember){
    if(purchaseAmount > 100){
        console.log("20% discount")
    }else{
        console.log("10% discount")
    }
}else{
    if(age > 65 && purchaseAmount > 50){
        console.log("15% discount")
    }else{
        console.log("No discount")
    }
}

// Task 6
let gpa = 3.6
let inActivities = false
let needsMoney = true
if(gpa >= 3){
    if ((gpa >= 3.5 && inActivities) || needsMoney){
        console.log("Student qualifies")
    }else{
        console.log("Student does NOT qualify")
    }
}else{
    console.log("Student does NOT qualify")
}