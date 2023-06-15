/*let x = 10;
x = "This is a string";
console.log(typeof x);
// Creating an object using Dot notation :
let person = {
    name : "Suraj",
    age : 22,
    address : {
        city : "Sambhaji Nagar",
        state : "Maharashtra",
    }
};

console.log(person.name);
console.log(person.age);
console.log(person.address.city);
console.log(person.address.state);
*/

// ⭐ Numbers using a constructor:

// 1) Number Datatype:

/*let n = 20;
let x = new Number(10); // This is a Number constructor.
console.log(x == n);
console.log(x === n); // it will used to check the datatype
*/

/*
// 2) String Datatype:

let name = "Suraj";
let surname = "Shinde";
let fatherName = new String("Bharatbhushan");
let fullName = name + " " + fatherName + " " + surname
console.log(name);
console.log(surname);
console.log(fatherName)
console.log(fullName)
*/

/*
// 3) Boolean Datatype:

let isHappy = true;
if(isHappy){
    console.log("I am Happy");
}else{
    console.log("I am Sad.");
};

let x = 20;
let y = 30;
let isGreater = x > y;
console.log(isGreater);
*/

/*
// 4) Null DataType:

let myVariable = 100;
if(myVariable != null){
    console.log("This is not a Empty");
}else{
    console.log("This is Empty.");
};
*/

/*
// 5) Undefined Datatype:

let myVariable;
myVariable = 55;
if(myVariable != undefined){
    console.log("Your variable is initialise");
}else{
    console.log("Your variable is still not initialise");
};
*/

// 6) Object datatype:
const myobj = {
    name : "suraj",
    surname : "Shinde",
    address : {
        Street : "Sambhaji Nagar",
        State : "Maharashtra",
    }
};
console.log(myobj.name);
console.log(myobj.address.Street)
