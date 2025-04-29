




//  Given an array of product objects (each with name, price, and inStock properties), write a function that returns a new array containing only the products that are inStock: true, and sort the available products by price in ascending order. (5 pts)

function availableSortedProducts(products){
    return products.filter(product => product.inStock)
    .sort((a,b) => a.price - b.price)
}


let products = [
    {name:'laptop', price:40000,inStock:true},
    {name:'books', price:2000,inStock:true},
    {name:'chairs', price:20000,inStock:false},
    {name:'chargers', price:1000,inStock:false},
]

console.log(availableSortedProducts(products))



//  Create an object called grades where the keys are student names and the values are arrays of their scores. Write a function that calculates and prints each student's average score, and if the average is above 70, print "Pass"; otherwise, print "Fail" next to their name. (5 pts)

// let grades = [
//     {Shirley:[85,56,72]},
//     {David:[55,50,42]},
//     {Shelly:[88,46,42]},
// ]


// function calculateAverageScore(grades){
//     let sum = 0
//  for(let i =0;i< grades.length;i++)
//         sum += grades.values i
//  return  sum/grades i.length
   
// }

// console.log(calculateAverageScore(grades))





//  Write a function constructor called User that takes username, email, and isActive (boolean). Create an array of users. Write a program that loops through the array and deactivates users who have not logged in recently (simulate this with a random isActive: false assignment) and print out the usernames of active users. (5 pts)
function user(userDetails){
 return userDetails.map(item => {
    if (item.isActive){
        return item.name
    } 
    else{return "Account deactivated"}
})

}

let userDetails = [
{name:'Victoria',email:'victoriaogega@gmail.com',isActive:true},
{name:'Derrick',email:'derrickmambo@gmail.com',isActive:true},
{name:'Ogega',email:'ogegabosiborori@gmail.com',isActive:false},
]
console.log(user(userDetails))






//  You have an array of destination objects, each with name, distance (in km), and budgetRequired (in dollars). Write a function that accepts a maximum distance and a budget and returns all destinations the user can afford and reach within that distance. If none are found, return "No destinations available under your budget and distance". (5 pts)

function destination(destinationDetails){
return destinationDetails.filter(item=> {
   item.distance <= '50km' && item.budgetRequired <= '100$'  
    return destinationDetails.name
   }
)
}
let destinationDetails = [
    {name:'Kisumu',distance:'100km',budgetRequired:'15$'},
    {name:'United states',distance:'50km',budgetRequired:'155$'},
    {name:'United Arab emirates',distance:'12km',budgetRequired:'125$'},
]
console.log(destination(destinationDetails))
// Create a function constructor called Employee that accepts a name, position, and salary. Create an array of 5 employees. Write a program that increases the salary by 10% for employees who have the position "developer" and print the updated employee list. (5 pts)

function Employee(name,position,salary){
    this.name = name;
    this.position = position;
    this.salary = salary;
}

let employees = [
  new Employee  ('Abraham','developer',200000),
  new Employee  ('Mercy','QA tester',120000),
  new Employee  ('Sharon','developer',230000),
  new Employee ('Abby','machine learning engineer',300000),
  new Employee ('James','developer',205000)
]

 return employees.forEach (employee => {
    if (employee.position === 'developer'){
        employee.salary * 1.1 
    }
    console.log(employees)
})git add