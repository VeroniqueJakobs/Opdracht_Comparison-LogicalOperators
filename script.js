
// part 1
const age = 27;

if (age >= 18) {
console.log("Welcome!");
}  else if(age <18) {
console.log("Sorry, no entrance. Please stay outside.") ;
}

// Part 1: 50% discount
if ( age >=18 && age <=25 ){
console.log("You get 50% off");
} else if(age >25){
console.log("You get 10% off");
}

 // part 2
const isFemale = true;

if (isFemale) {
console.log("You're welcome");
} else {
    console.log("Please stay outside");
}

//Part 2: Fun action!
const firstName ='Vero';

if(firstName =='Bram' || firstName =='Sarah'){
    console.log('You get a free beer');
}else{
    console.log('You get a free Whisky');
}

// part 3
const driverStatus = 'bob';

if(driverStatus == 'bob'){
console.log("You are allowed to drive");
} else {
console.log("You are not allowed to drive");
}

//Part 3: Anniversary discount
const totalAmount = 19;

if (totalAmount > 25 && totalAmount < 50) {
    console.log ("You get free (veggie) bitterballs");
} else if(totalAmount > 50 && totalAmount <100) {
    console.log ("you get a free portion of nachos");
} else if (totalAmount > 100){
    console.log("you get a free bottle of champagne");
}else if (totalAmount <25 & totalAmount >=18){
    console.log('You get a free Snickers');
}

