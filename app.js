// Var OR Let CONST

// "var" allowed to redeclaration variable
// value changing is allowed "var"
// var x = 30
// var x = 60 

// "let" not allowed to redeclaration variable
// value changing is allowed "let"
// let y = 50
// y = 60

// "var" allowed to print the value in out of scop
// for(var i=0;i<=3;i++){
//     console.log(i)
// }

// "let" not allowed to print the value in out of scop
// for(let i=0;i<=3;i++){
//     console.log(i)
// }
// console.log(x)
// console.log(y) 


// "const" cannot change value in const variable
// "const" cannot declaration variable 
// "const" predictiable variable 

// const z = 30
// const price = 100
// const lastprice = price -50

//code

// console.log(lastprice)  

// Template Litrels
// const name =  "Ahmed"
// const age = 22
// const weight = 60

// const greet = `after dieting,
// my weight is ${weight - 10}`

// console.log(greet)

// truthy & Falsy values
// false values
// "",false,undefined,null,0 
// const username  = ""

// if(username){
//     console.log("You are adult")
// }else{
//     console.log("You are nooob")
// }

// Ternary
// const age = 40 
// let user =  false

// if(token){
//     user = false
// }else{
//     user = false
// }

// const user = age >= 18 ? 'adult' : 'child'

// console.log(user)

// short circuiting

// const emailVarified = false   
// const name = "Ahmed"
// const username = (emailVarified && name) || "User"

// console.log(username)

// objects & destruction
// const person = {
//     name: "Ahmed",
//     age:20,
//     details:{
//         status:"coder"
//     }
// }

// object destructuring , pull out
// const {name:username, age:myage} = person
// renaming destructuring 
// const {name,age,details:{status}} = person
// const {status} = person.details

// console.log(`I am ${username}`)
// console.log(`my age is ${myage}`)
// console.log(`status is ${status}`)
// console.log(person.age)
// console.log(person["age"])
