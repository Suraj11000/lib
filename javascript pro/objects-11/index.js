/*
let person={
    name : "Suraj",
    age : 22
};
person.name = "Kunal";// to modify the object
delete person.age; // to delete the key inside the object
console.log(person);
console.log(person.name);
*/

// ==================== creating a function inside a object ===================
/*
let car = {
    color : "red",
    name : "verna",
    start : function(){
        console.log("Star the car");
    },
};
console.log(car.start());
*/

// ======================== method contest ======================
/*
let person = {
    name : "suraj",
    surname : "Shinde",
    fullName : function(){
        console.log(this.name +" "+ this.surname);
    }
};
person.fullName();
*/

// ============================== Constructor =====================
/*
let name;
let surname;
function Person(name,surname){
    this.name = name;
    this.surname = surname;
};
let fullName = new Person("Suraj", "Shinde");
console.log(fullName.name, fullName.surname);
*/


// ===================== addEventListener ====================
/*
let button = document.getElementById("my-btn");
button.addEventListener("click", function(){
    console.log(this);
})

let button = document.getElementById("my-btn");
button.addEventListener("click", function(){
    console.log("The button has been clicked.")
});
*/