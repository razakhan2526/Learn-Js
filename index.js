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
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

// DRY = Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

// Conditionals in JavaScript
var age = 30;
// Single if statement
// if (age > 18) {
//     console.log('You can drink water');
// }

// if - else statement
// if(age > 18){
//     console.log('You can drink water');
// }

// else{
//     console.log('You cannot drink water');
// }
/*
// if-else ladder 
if(age > 32){
    console.log("You are not a Kid");
}
else if(age > 26){
    console.log("bachhe nhi rahe");
}
else if(age > 22){
    console.log("Yes bachhe nhi rahe");
}
else if(age > 18){
    console.log("18 bachhe nhi rahe");
}
else{
    console.log("bachhe rahe");
}
console.log("End Of Ladder");
*/


var arr = [1, 2, 3, 4, 5, 6, 7];
 console.log(arr);
 for(var i = 0;i<arr.length;i++){
     if(i==2){
         break
         continue;
     }
     console.log(arr[i]);
 }

//  arr.forEach(function(element){
//      console.log(element);
//  });

// const ac = 0;
// ac++;
// ac  =  ac + 1; 
let j = 10;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

do{
    console.log(arr[j]);
    j++;
}while(j < arr.length);