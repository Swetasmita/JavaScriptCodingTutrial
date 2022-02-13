
var x = 30
var x = 40 //redeclare is possible

let y = 50
y = 60 //reassign is possible , but not redeclare
console.log(x)
console.log(y)

//for loop
for(let i =0; i<=3; i++){
    console.log(i);
}
//console.log(i); -  console log is not excuted outside of the block for let keyword.
const z = 20
//const will throws error if its not initialized or defined, It cant be changed later
console.log(z);


const price = 100
const lastprice = price - 50

console.log(lastprice);

//Template Literals
const name = "Ramesh"
const salaray = 45000
const weight = 60

//string concatenation
// const greet = "I am " + name +" my age "+ age (old process)
const greet = `I am ${name}
my salary is ${salaray}
After diet, my weight will ${weight - 10}` //expression injection in JS
console.log(greet)


//If statement
const age = 40

if(age >= 18){
    console.log("you are eligible")
}
else{
    console.log("you are not eligible")
}

// Truthy and false value like - " ", false, undefined, null, 0
const username = ''
//username = '',false, null, 0 etc (falsy value)
//username = "Sweta"  (Truthy value)

//More than multiple statements, use If statements
if (username){
 console.log("you are welcome!")
}
else{
    console.log("user doesnt exist")
}
//if(!username){
//     console.log('user doesnt exist')
// }

//Ternary (for single line statement, we use Ternary)
const userAge = 8
const user = userAge >= 18 ? 'adult' : 'child'
console.log("User is "+ user)

//Short Circuiting
const emailVeri = "m@hotmail.com"
const uname = "Mukesh"
//Use Pipe || to understand short code
const user_name = emailVeri || uname
const userName = uname || "User"
console.log(user_name)
console.log(userName)

//Objects and destructuring
//Object Declaration
const person = {
 firstName : 'John',
 lastName :'Doe',
 city : 'Dublin',
 details:{
     status: "programmer" //nesting object
     }
};

//const { property1: variable1, property2: variable2 } = object;
const {firstName, lastName:ln, city} = person //object destructuring
const{status} =  person.details //obj with property

//console.log(person.city)
console.log(`I live in ${city}`)
console.log(`I am ${firstName} ${ln} and I am a ${status}`)

//Ex-2
const type ="Fiat"
const model = 500
const color = "white"
const car = {type,model,color}

console.log(car.type)
console.log(`Car model is ${model}`)

//Genral Function
// function sum(){
//     const p = 30
//     const q = 20
//     console.log("result: "+ (p+q))
// }
//const sum = function(){
const sum = ()=> {   //arrow function
    const p = 30
    const q = 20
    console.log("result", p+q)
}
//call function - sum() can't be hoisted in arrow fun.
sum()

//passing paramter - you can pass more than one parameter
// const greetUser = (user, height) =>{
//  console.log(`Hello ${user} height = ${height}`)
// }
// greetUser("Sweta", 5.3)

const greetUser = ({user, height}) => {
 return  `Hello ${user} height = ${height}`
   }
   // or single code: const greetUser = (user, height) => `Hello ${user} height = ${height}`
  console.log(greetUser({user:"sweta", height:5.3}))

 const hello = (val)=> {
 return `Hello ${val}`
 }
 console.log(hello("Universe"))


 //reference type are called non-primitive data types
 //they will share the same memory location
 const obj1 = {
    Forename:"Clark",
    Surname:"Kent"
 }
 const obj2 = obj1
 obj1.Forename = "Harry"
 console.log(obj2)

 //primitive type - e value will reamin same. it didnt change
 let d = 3
 let e = d
 d = 4
 console.log(d,e)

//array - non-primitive data type(refrence data type)
 const arr = [10,30]
 const arr2 = arr
 arr.push(40)
 console.log(arr2)

//Ex - copy obj1 to obj2
 const emp1 = {
    fname:"smith",
    lname:"Power"
 }
 const emp2 ={
    ...emp1     //use ... dots means spread operator in js , which is used to copy to obj2
 }
 emp1.fname = "sdsa"
 console.log(emp2)

 //Ex - spread operator (...) is used to copy one object to another object
//same also happens in arrays
 const user1 = {
     id:1,
     uname:"suresh",
     pswd:"dscd",
     item:"book"
 }
 const cart = {
     ...user1,
     item:'shoes'
 }
 console.log(cart)

 //arrays, map and filter
 const numbers = [10,20,30,40]
 //console.log(numbers[0])
 console.table(numbers)

 //addition of two arrays
 const value1 = [50,60,70,80]
 const value2 = [...value1]
 console.table(value2)

 const num1 = [10,20,30,40]
 const num2 = [50,60,70,80]

 const n3 = [...num1,...num2]
 console.table(n3)

 //array destructuring
const num =[2,4,6]
const[a,b,c]= num
console.table(a,b)

//arrays - foreach loop
const fruits = ['mango','apple','banana'];

// for(let i= 0; i<fruits.length; i++){
//  console.log(fruits[i])
// }
fruits.forEach((f) => {
 console.log(f);
})
//Array.forEach (<anonymous>)
const numList = [1, 2, 3];
numList.forEach((number) => {
  console.log(number);
});

//Objects inside an array. objects have some key values.
//alt+shift+down key to copy the text objects
const employees = [
    {name:"Ramesh", salary:2300},
    {name:"Hari", salary:2200},
    {name:"Michel", salary:2100},
  ]
 // const empNew = [] //decalre new array
//#1 forEach method
//   employees.forEach(item => {
//   item.salary +=1000
//   empNew.push(item)
// })

const empNew = employees.map(item => {
    item.salary +=1000
    return item
  })
console.log(empNew)

//#2 mapping array - where map returns a new array
const sweetArray = [2,3,4,35]
const newArray = sweetArray.map(sweetItem => {
 return sweetItem * 2
})
console.log(newArray)

// Filter method - create some objects inside an array
const Todos = [
    {id:1, todo:"eat"},
    {id:2, todo:"sleep"},
    {id:3, todo:"code"},
    {id:4, todo:"dance"}
]
//item.todo != 'code'
//or const NewTodo = Todos.filter((item)=> item.id > 2 )
const NewTodo = Todos.filter((item)=> {
 return  item.id > 2
})
console.log(NewTodo)

//removeTodos is used remove particular item from an array
const removeTodos = (id) => {
    const newTodos = Todos.filter((item) => item.id != id)
    //console.log(newTodos)
    console.table(newTodos)
}
removeTodos(2) //its remove 2nd item
//filter operation
const users = [
    {name:"ramesh", sal:2000},
    {name:"suresh", sal:3000},
    {name:"hitesh", sal:4000}
]

const userNew = users.filter((items) => items.sal >= 3000)
console.table(userNew)

//Fetch, promises & async await - Network Responses
//promise makes your network request either result or reject

function fetchPost(){
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json()) //then returns promise
.then(result => console.log(result))
.catch(error => console.log(err))
}
//2nd example - - Javascript async() await
const fetchApi= async() =>{
try{
 const res = await fetch('https://jsonplaceholder.typicode.com/todos')
 const result = await res.json()
 console.log(result)
}
catch(err){
 console.log(err)
}
}
//styling console.log - %c used for styling color
function showText(text){
    console.log(`%c ${text}`,'color:orange')
}
showText('Hello, I am a Coder')
//console.log('%c I am Sweta and %c my status is coder!','color:green; font-size:22px','background:red ;color:white')

//Class and Extends example
// %c used for styling color - create a func to provide functionality
function changeColor(text){
    console.log(`%c ${text}`,'color:green')
}
class Bike //create a blueprint
{
    //constructor method has 2 properties values
    constructor(color, maxspeed) {
        this.color = color
        this.maxspeed = maxspeed
    }
    intro() {
        changeColor(`Bike in color ${this.color} and max speed ${this.maxspeed} kmph`)
    }
}
 const bullet = new Bike("red", 120)  //create two objects here
 const avenger = new Bike("black", 130)
 bullet.intro()
 avenger.intro()


//create a object class bullet
// const bullet = {
//     color:"green",
//     maxspeed:110,
//     intro:()=>{
//        changeColor(`Bullet bike in color ${bullet.color} and max speed ${bullet.maxspeed} kmph`)
//     }
// }

//calling this function
// changeColor(bullet.color)
// bullet.intro()

//JS CLASS AND INHERITANCE
class Car {  //Parent class
constructor(brand, color){
    this.brand = brand
    this.color = color
    }
    present(){
    console.log(`I have a ${this.brand} car and color is ${this.color}`)
    }
}
//Inheritance Class - Child class inherits/derives from its parent Class
class Model extends Car{
  constructor(brand,color,airbag) {
      super(brand,color)  //call parent class constructor
      this.airbag = airbag
  }
}
const Fiesta = new Model("Ford", "Magenta",true)  //create an object 
Fiesta.present()

//Example of Class, Inheritance

class Student{
    //constructor has some properties
    constructor(name,age,cls){
        this.name = name
        this.age = age
        this.cls = cls
    }
    //instance method
    bioData(){
       return`Hi I am ${this.name}, I am ${this.age} years old and I am in class ${this.cls}.`;
    }
}
//create a class that extends the parent class.ie. It inherits.
class Player extends Student{
    //constructor has some properties or parameters
    //game is its own properties, 3 other are inherits from parent class
 constructor(name,age,cls,game){
     super(name,age,cls)
     this.mygame = game
 }
 play_bioData(){
     return ` ${this.bioData()} I love ${this.mygame}`
 }
}

const s1 = new Player('Vinod', 23,'MSC','Football')
const s2 = new Player('Hari', 20,'BSC','Badminton')
//console.log(obj11)
console.log(s1.play_bioData())
console.log(s2.play_bioData())

