//1. Hello Variable
let greeting = "Hello, World!";
console.log(greeting);

//2. Basic Math

let num1, num2;
num1 = 8;
num2 = 3;
let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;
console.log(`Sum of num1 and num2 is = ${sum}`);
console.log(`Sub of num1 and num2 is = ${sub}`);
console.log(`Mul of num1 and num2 is = ${mul}`);
console.log(`Div of num1 and num2 is = ${div}`);
console.log(`Mod of num1 and num2 is = ${mod}`);

//3. Swapping Values
let a = 1,
  b = 2;
a = a + b; // In this stage value of a is 3
b = a - b; // The value of B become 1
a = a - b; //The value of a become 2

console.log(
  `After swaping the Values Of A is = ${a} and the Value of B is ${b}`
);

console.log();

// 4. Type Annotation (TypeScript)
let message: string; //= 4;
// An error is come

// 5. Modulus Operator

// I already declared Num1 and num2 variable so i can use it again

console.log(`Q No 5 Ans:   Mod of num1 and num2 is = ${mod}`);

// 6. Increment Challenge
let counter = 0;
counter++;
console.log(`Value of counter variable increase by 1 = ${counter}`);

// 7. Logical Gates
let a1 = true,
  b1 = false,
  c1 = true;
// First we try And Gate

let gateAnd = a1 && b1;
console.log("Q 7 compare first Two Variable Values using AND GAte ", gateAnd);
let gateAnd1 = b1 && a1;
console.log(gateAnd1);
let gateAnd2 = c1 && a1;
console.log(gateAnd2);
let gateAnd3 = b1 && c1;
console.log(gateAnd3);

// seconly we try OR Gate

let gateOr = a1 || b1;
console.log("Here i try OR Gate ", gateOr);
let gateOr1 = b1 || a1;
console.log(gateOr1);
let gateOr2 = c1 || a1;
console.log(gateOr2);
let gateOr3 = b1 || c1;
console.log(gateOr3);

// In the Last step we try Not Gate

let gateNot = !(a1 && b1);
console.log("Here i try Not Gate ", gateNot);
let gateNot1 = !(b1 && a1);
console.log(gateNot1);
let gateNot2 = !(c1 && a1);
console.log(gateNot2);
let gateNot3 = !(b1 && c1);
console.log(gateNot3);

//8. Compound Assignment

let num11 = 10;
console.log("Q No 8 About Compund Statement", num11);
num11 += 3;
console.log("Using += ", num11);
num11 -= 4;
console.log("Using -= ", num11);
num11 *= 4;
console.log("Using *= ", num11);
num11 /= 2;
console.log("Using /= ", num11);

//9. Even or Odd
let checkevenOdd = 9;
console.log(
  "Q9 Check Even or Odd Number is And the Number is = ",
  checkevenOdd
);
if (checkevenOdd % 2 == 0) {
  console.log(" Number is Even ");
} else {
  console.log("Number is Odd");
}

//10. Voting Eligibility
let age = 19;
if (age >= 18) {
  console.log("Q10 yes you are eligibale for vote");
} else {
  console.log("sorry you are not eligibale for Vaote");
}
// 11. Grading System
console.log("Q No 11 Grading System ");
let marks = 49;
if (marks >= 90 && marks <=100) {
  console.log("your Grade is A");
}
if (marks >= 80 && marks <=89) {
  console.log("your Grade is B");
}
if (marks >= 70 && marks <=79) {
  console.log("your Grade is c");
}
if (marks >= 60 && marks <=69) {
  console.log("your Grade is D");
}
if (marks >= 50 && marks <=59) {
  console.log("your Grade is E");
} else {
  console.log("your Fail");
}

//12. Max of Three
console.log("Q No 12 Max of Three");
let x,y,z,max;
x=3,y=5,z=2;

if(x > y && x>z) {
  console.log("Max of three is X = "+ x);
}
else if(y > x && y>z) {
  console.log("Max of three is Y = "+ y);
}
else {
  console.log("Max of three is Z = "+ z);
}

//13. Leap Year Checker
console.log("Q No.13 Leap Year Checker");

let year = 2023;
if (year % 4 ==0)
{
  console.log("yes its a Leap Year ");
}
else{ 
  console.log("No its not a leap year ");
}

//Fahrenheit to Celsius Converter
console.log("Q No . 14 Fahrenheit to Celsius Converter");
let fahrenHeit, Celsius:Number;
fahrenHeit = 40.1;
Celsius = (fahrenHeit - 32)*5/9;
console.log("The Tmp in Celsius   "+Celsius);

//15. Positive, Negative, or Zero
console.log("Q No .15. Positive, Negative, or Zero");
let numCheck = 2;
if (numCheck > 0){
  console.log("The Number is Positive");
}
else if (numCheck <0 ){
  console.log("he Number is Negative");

}
else {
  console.log("he Number is Zero");
}

//16 .Multiplication Table

console.log("Q No 16 Multiplication Table");

let tableNo = 6;
console.log("We present the Table of Number ", tableNo)
console.log("6 X 1 = ", tableNo*1);
console.log("6 X 2 = ", tableNo*2);
console.log("6 X 3 = ", tableNo*3);
console.log("6 X 4 = ", tableNo*4);
console.log("6 X 5 = ", tableNo*5);
console.log("6 X 6 = ", tableNo*6);
console.log("6 X 7 = ", tableNo*7);
console.log("6 X 8 = ", tableNo*8);
console.log("6 X 9 = ", tableNo*9);
console.log("6 X 10 = ", tableNo*10);

// We can print the table by using loop
console.log("Table using Loop");
for ( let i = 1; i <= 10; ++i) {
    console.log("%d * %d = %d \n", numCheck, i, numCheck * i);
  }
  


  