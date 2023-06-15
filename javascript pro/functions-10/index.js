// =========================== Function =========================

     //  +++++++++++++++++++++ Required Parameters ++++++++++++++++++++
/*
function add(x,y){
    return x + y;
};
addition = add(50,500 );
console.log(addition);
*/

// ======================= Optional Parameters =============================
/*
function greet(name, message ="Welcome to the hell"){
    console.log(`${name}, ${message}`);
}
greet("Suraj"); 
*/


// ================================ Rest Parameter ============================
/*
function sum(...numbers){
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
};
totSum = sum(10,522,4465,74,24,1,445,84,14,54,);
console.log(totSum);
*/


// ========================= Nested Func ======================
/*
function outerFunc(){
    function innerFunc(){
        console.log("Inner Function")
    }
    console.log("Outer Function");
    innerFunc();
};
outerFunc();
*/

// ============================= Closers =================================
/*
function outerFunc(){
    let x =110;
    function innerFunc(){
        console.log("X =  "+x);
    }
    return innerFunc;
}
var closure = outerFunc();
closure();
*/

// ================================ Arrow Functions ============================
/*
const person = {
    name : "suraj",
    sayName : function (){
        console.log(this.name);
    }
}
person.sayName();
*/

/*
let mulFunc = (num1,num2)=>{
    return num1 * num2;
};
// let mulFunc = num => num *2; implicite return function.

console.log(mulFunc(20,10));
*/

/*
simple function
let num = [1,2,3];
num.forEach(function(value,index){
    console.log(value);
});
*/

let num = [1,2,3];
num.forEach(value => console.log(value));