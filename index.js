




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

let grades = {
    Shirley:[85,56,72],
    David:[55,50,42],
    Shelly:[88,46,42],
}


function calculateAverageScore(grades){
    let sum = 0
 for(let i in grades = 0);i in grades< grades.length;i in grades ++
   sum += grades[i]    
   let average = sum/grades[i].length
   
}

console.log(calculateAverageScore(grades))





//  Write a function constructor called User that takes username, email, and isActive (boolean). Create an array of users. Write a program that loops through the array and deactivates users who have not logged in recently (simulate this with a random isActive: false assignment) and print out the usernames of active users. (5 pts)
function User(username,email,isActive){
 this.username= username,
 this.email = email,
 this.isActive = isActive
}

let userDetails = [
new User('Victoria','victoriaogega@gmail.com',true),
new User('Derrick','derrickmambo@gmail.com',true),
new User('Ogega','ogegabosiborori@gmail.com',false),
]

  return  userDetails.forEach(user => {
    if (user.isActive){
        console.log(`${user.name}`) 
    }
    else{console.log("Account deactivated") }
})








//  You have an array of destination objects, each with name, distance (in km), and budgetRequired (in dollars). Write a function that accepts a maximum distance and a budget and returns all destinations the user can afford and reach within that distance. If none are found, return "No destinations available under your budget and distance". (5 pts)

let destinationDetails = [
    {name:'Kisumu',distance:10,budgetRequired:15},
    {name:'United states',distance:500,budgetRequired:155},
    {name:'United Arab emirates',distance:102,budgetRequired:125},
]

function destination(destinationDetails,maximumDistance,budget){
  let foundDestination =  destinationDetails.filter(item=> {
   item.distance <= maximumDistance && item.budgetRequired <= budget  
   }
);
}

if(foundDestination.length > 0){
    return foundDestination
}
else{return "No destination found"}




console.log (destination(destinationDetails,100,155))

// console.log(destination(destinationDetails))
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

 employees.forEach (employee => {
    if (employee.position === 'developer'){
        employee.salary *= 1.1
    }    
})
console.log(employees)