/// Data Types
let number = 10;
let  nicknaeme = "hello";
let isinCorrect = true;
let katulgon;
let katulgons = null;

// Arithmetic and Logical Operators

let x = 2;
let y = 3;
let res = x / y;
let result = number * 5 + 2;
console.log(result);
let isTrue = number > 5 && boolean;


// Conditional Statements
// if 
let wer = 2;
if (wer > 5) {
    console.log("Were na you?");
}
//if else
if (number % 2 === 0) {
    console.log("Number is even");
} else {
    console.log("Number is odd");
}

// switch
let day = 1;
switch (day) {
    case 1:
        console.log("It's Day 1");
        break;
    case 2:
        console.log("It's Day 2");
        break;
    case 3:
        console.log("It's Day 3");
        break;    
    default:
        console.log("It's another day for taking JS");
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//do while
let l = 0
do {
     l++;
}while (l < 5);
console.log(l);



// Functional Programming
// Determine if a number is odd or even
function checkOddEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkOddEven(7));

// Determine if a number is prime
function Prime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return "Not Prime";
        }
    }
    return "Prime";
}

console.log(Prime(13));

// Determine if a string is a palindrome
function Palindrome(check) {
    let reversedStr = check.split('').reverse().join('');
    if (check === reversedStr) {
        return "Palindrome";
    } else {
        return "Not a Palindrome";
    }
}

console.log(Palindrome(""));
