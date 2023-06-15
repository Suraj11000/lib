
// ways to print in javascript
// console.log("hii i am suraj");
// document.write("This is the document write");

// javascript apis
// alert("hii");
// console.warn("This is a warning");
// console.error("This an error");
// console.clear();
// console.assert(4==4)
let num1 = 45;
let num2 = 30;
// console.log(num1 + num2);


// ⭐ Data types in javascript
// Numbers
var age = 56;
let marks = 86;


// String

var str1 = "This is the 1st string";
let str2 = "this is another string";

// Objects:

var mark = {
    yash : 83,
    suyog : 69,
    prince : 99
};

// console.log(mark);

/*there are two types of data types in javascript.
1) primitive data types: Number, String, Boolean, Undifined, Null, Symbol.
2) Reference data types: Array, Objects & Function*/

var arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr)

// Arithmatic operators: (+ , - , / , *)

var a = 18;
var b = 12;
// console.log("The value of A and B is =", a + b);
// console.log("The value of A and B is =", a - b);
// console.log("The value of A and B is =", a * b);
// console.log("The value of A and B is =", a / b);

// Assignment operator:

var c = b;
// c += 2;
// c -= 2;
// c *=2;
// c /=2;
// console.log(c);

// Functions in javascript:
// Functions are used for DRY principles.

function avg(aa,bb){
    return (aa + bb)/2;
}
c1 = avg(10,20)
// console.log(c1)

// For Loop in javascript

var arr = [1,2,3,4,5,6,7,8,9]

for(var i = 0; i < arr.length;i++){
// console.log(arr[i])
}

arr.forEach(function(element){
//     console.log(element);
})

// While Loop:

let j = 0;

// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// Do WHile Loop:

// do{
// console.log(arr[j]);
// j++;
// }while(j < arr.length)

// String methods in javascript:

let bestString = "I am the best in the universe";
// console.log(bestString.length)
// console.log(bestString.indexOf("universe"))
// console.log(bestString.lastIndexOf("universe"))
// console.log(bestString.replace("universe","india"))

// Date time in javascript

let date = new Date();
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getMonth());
// console.log(date.getHours());

// ⭐ DOM Document element model manipulation

let elemId = document.getElementById("btn");
// console.log(elemId);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass)

// elemClass[0].classList.add("bg-primary");
// console.log(elemId.innerHTML);
// console.log(elemId.innerText)

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName("div");
// console.log(tn);
// createElem = document.createElement("p");
// createElem .innerText = "This is the created para."
// tn[0].appendChild(createdElement);

// sel = document.querySelector('.container')
// console.log(sel)

function clicked(){
    console.log("The was clicked now!")
}

window.onload = function(){
    console.log('the document was loaded');
}

// Events in javascript

// firstcontainer.addEventListener('click', function(){
//     console.log('clicked on container')
})