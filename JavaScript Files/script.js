alert("Javascript is working!")
console.log("Hello World!");
console.error("This is an error");
console.warn("This is a warning");

let x;
x = 10;
console.log(x);

//Objects
const person =  {
firstName: "John",
lastName:  "Doe",
age:20,
hobbies: ["music", "dancing", "travelling"],
address: {
    street: "NO.1 independence layout",
    city: "Enugu",
    state:"Enugu State",
    country:"Nigeria",
},
};

console.log(person.firstName, person.lastName)
console.log(person.hoobbies[1], person.hobbies[2])
console.log(person.address.street)

//Exppression and condititonal statements in Javascript
let num1 = 5; 
let num2 = 10;

let sumTotal = num1 + num2;
console.log(sumTotal);