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

 // Arrow Functions

 //  3 three way to use function

// const function sum(){
//     const x = 3
//     const y = 4
//     console.log("sum is",x+y)
// }


// const sum =  function(){
//     const x = 3
//     const y = 4
//     console.log("sum is",x+y)
// }

// const sum2 = ()=>{
//      const x = 3
//     const y = 4
//     console.log("sum is",x+y)
// }

// sum2()

// const greet = ({name,age}) => ({result:`hello ${name} age = ${age}`})
// {

    // const {name,age} = person
    // `hello ${name} age = ${age}` 
    // console.log(`hello ${name} age = ${age}`)
    // return `hello ${name} age = ${age}`
    // object log 
    // return{result:`hello ${name} age = ${age}`}  
// }

// console.log(greet({name:"Ahmed", age:30}))

// Primitive vs reference type & Spread 

// const user = {
//     id:1,
//     username: "Ahmed",
//     password: "coder",
//     item: "book"
// }
// const obj2 = obj1
// obj1.name = "Raza"


// const cart = {
//     ...user,
//     item: "shoes"
// }

// console.log(cart)

// Arrys, map and filter
const numbers1 = [10,20,30,40]
// const numbers2 = [10,20,30,40]
// spreading array
// const n2 = [...numbers1,...numbers2]

// destructuring array
// const [a,b,c,d] = numbers1 

// console.table(d)

// array string 
const fruits = ['mango','apple','banana']
 
// for(let i=0;i < fruits.length;i++){
//     console.log(fruits[i])
// }

// fruits.forEach( (fruits)=>{
//     console.log(fruits);
// } )

// array object
const employee = [
    {name:"Ahmed",salry:10000},
    {name:"saim",salry:20000},
    {name:"Saffe",salry:30000},
] 


// const empNew = []

// employee.forEach((item)=>{
//     item.salry += 1000
//     empNew.push(item)
// })

// console.table(empNew)

// const empNew = employee.map((item)=>{
//     item.salry += 1000
//     return item
// })
// console.table(empNew)