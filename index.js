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
//  console.log(arr);
//  for(var i = 0;i<arr.length;i++){
//      if(i==3){
//         //  break 
//          continue;
//      }
//      console.log(arr[i]);
//  }

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

// do{
//     console.log(arr[j]);
//     j++;
// }while(j < arr.length);

// let myArr = ["Fan", "camera", 34, null,true];
// Array Methods
// myArr.pop();
// myArr.push("Ahmed Raza");
// myArr.shift();
// const newLan = myArr.unshift("Ahmed Raza")
// console.log(newLan);
// console.log(myArr);

// String Methods in JavaScript
let mylovelystring = "Ahmed is a good boy";
// console.log(mylovelystring.length);
// console.log(mylovelystring.indexOf("good"));
// console.log(mylovelystring.lastIndexOf("good"));

// console.log(mylovelystring.slice(0,3));
d = mylovelystring.replace("Ahmed", "Raza");
// d = d.replace("good","bad");
// console.log(d, mylovelystring);


 let myDate =  new Date();
//  console.log(myDate.getTime());
//  console.log(myDate.getFullYear());
//  console.log(myDate.getDay());
//  console.log(myDate.getMinutes());
//  console.log(myDate.getHours());

// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary");
// elemClass[0].classList.add("text-success");
// elemClass[0].classList.remove("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

// tn = document.getElementsByTagName('div');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created Para";
// tn[0].appendChild(createdElement);

// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold";
// tn[0].replaceChild(createdElement2, createdElement);


// Selecting using Query
// sel = document.querySelector('.container');
// console.log(sel);

// sel = document.querySelectorAll('.container');
// console.log(sel);

// function clicked(){
//     console.log('The Button was clicked');
// }
// window.onload = function(){
//     console.log('The document was loaded');
// }
// Evenets in JavaScript
// firstContainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<br> We have clicked </b>"
//     console.log("click on container")
// });

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on container")
// });


// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("Mouse up when clicked on container")
// });

// firstContainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
//     console.log("Mouse down when clicked on container")
// });

//SetTimeOut and setinterval
// Arrow Functions
// function  summ(a, b){
//     return a+b;
// }
// summ = (a,b)=>{
//     console.log("I am your Log");
// }
// logKaro = ()=>{
//     document.querySelectorAll('.container')[1].innerHTML = "<b> We have clicked </b>"
//     console.log("I am your Log");
// }

// SetTimeout and setinterval
// clr = setInterval(logKaro, 2000);
// clearInterval(clr);

// JavaScript localStorage
