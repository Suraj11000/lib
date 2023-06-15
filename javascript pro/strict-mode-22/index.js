"use strict"

// function name(){
//     "strict mode"
// };

// let x = 10; 


// let obj = {
//     s : 10,
// };
// with(obj){
//     console.log(x);
// }

let obj = {};
Object.defineProperty(obj,"x",{
    value : 55,
    age : 65,
    writable : false
});
// console.log(obj.x)

obj.x =20;
console.log(obj.x);