// console.warn("This is write message");

// 1. JAVASCRIPT VARIABLES
// What are Variables? - Containers to store data valuse
// var number1 = 34;
// var number2 = 56
// console.log(number1 + number2);

// 2. Data type in javascript

// Number
// var num1 = 455;
// var num2 = 56.76

// String
// var str1 = "This is a string";
// var str2 = 'This is also a string';

// Objects
// var marks = {
//     ahmed:34,
//     saim:78,
//     saad:99.977
// }

// Boleans
// var a =  true;
// var b = false;

// Undefined
// var undefined;

// Null
// var n = null; 

/*
At a very high level, there are two types of data types in javascript 
1. Primitive data types: undefined , null, number, string, boolean, symbol
2. Reference data types: Arrays and objects
*/

// var arr = [1,2,3,4,5]

// Operators in javascript

// Arithmetic Operators

// var a = 100;
// var b = 10;

// console.log(" The value of a + b is ", a+b);
// console.log(" The value of a - b is ", a-b);
// console.log(" The value of a * b is ", a*b);
// console.log(" The value of a / b is ", a/b);

// Assignment Operators
// var c = b;
// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
// console.log(c);

// Comparison Operators
// var x =  34;
// var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);


// Logical Operators

// Logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// Logical not
// console.log(!true);
// console.log(!false);

// Fuction in Javascript
// DRY = Do not repeat yourself
function avg(a, b){
    c = (a + b)/2;
    return c;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);