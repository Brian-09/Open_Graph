//Nested If-Else 1
let weather = 'rainy';
switch(weather) {
    case 'sunny':
        console.log('Wear sunglasses');
        break;
    case 'rainy':
        console.log('Take an umbrella');
        break;
    case 'cloudy':
        console.log('Might need a light jacket');
        break;
    case 'snowy':
        console.log('Wear a coat and gloves');
        break;
    default:
        console.log('Weather is unpredictable')
}

//Nested If-Else 2
let day = 3;
switch(day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    default:
        console.log('Sunday');
}

//Nested If-Else 3
let trafficLight = 'green';
switch(trafficLight) {
    case 'red':
        console.log('Stop');
        break;
    case 'yellow':
        console.log('Slow down');
        break;
    case 'green':
        console.log('Go');
        break;
    default:
        console.log('Proceed with caution');
}

//Nested If-Else 4
let score = 75;
switch(true) {
    case (score >= 90):
        console.log('A');
        break;
    case (score >= 80):
        console.log('B');
        break;
    case (score >= 70):
        console.log('C');
        break;
    case (score >= 60):
        console.log('D');
        break;
    default:
        console.log('F');
}

//Nested If-Else 5
let size = 'L';
switch(size) {
    case 'S':
        console.log('Small');
        break;
    case 'M':
        console.log('Medium');
        break;
    case 'L':
        console.log('Large');
        break;
    case 'XL':
        console.log('Extra Large');
        break;
    default:
        console.log('Unknown Size');
}

//Nested If-Else 6
let browser = 'Chrome';
switch(browser) {
    case 'Chrome':
        console.log('Fast and popular');
        break;
    case 'Firefox':
        console.log('Privacy-focused');
        break;
    case 'Safari':
        console.log('Best for Apple devices');
        break;
    case 'Edge':
        console.log('Windows default browser');
        break;
    default:
        console.log('Other browser');
}

//Nested If-Else 7
let temperature = 25;
switch(true) {
    case (temperature < 0):
        console.log('Freezing');
        break;
    case (temperature < 10):
        console.log('Very Cold');
        break;
    case (temperature < 20):
        console.log('Cold');
        break;
    case (temperature < 30):
        console.log('Warm');
        break;
    default:
        console.log('Hot');
}

//Nested If-Else 8
let fruit = 'apple';
switch(fruit) {
    case 'apple':
        console.log('Apple a day keeps the doctor away');
        break;
    case 'banana':
        console.log('Rich in potassium');
        break;
    case 'orange':
        console.log('Good source of vitamin C');
        break;
    case 'grape':
        console.log('Sweet and juicy');
        break;
    default:
        console.log('Unknown fruit');
}

//Nested If-Else 9
let subscription = 'premium';
switch(premium) {
    case 'basic':
        console.log('Access to limited content');
        break;
    case 'standard':
        console.log('Access to most content');
        break;
    case 'premium':
        console.log('Access to all content');
        break;
    default:
        console.log('Invalid subscription type');
}

//Nested If-Else 10
let paymentMethod = 'credit card';
switch(paymentMethod) {
    case 'credit card':
        console.log('Processing with credit card');
        break;
    case 'debit card':
        console.log('Processing with debit card');
        break;
    case 'paypal':
        console.log('Processing with PayPal');
        break;
    case 'cash':
        console.log('Pay with cash');
        break;
    default:
        console.log('Invalid payment method');
}