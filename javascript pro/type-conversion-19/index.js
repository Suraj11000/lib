/*
let x ="hello";
let num = 3;
let bool = true;
let emptyObj = {};
let myFunc = function(){

};

let ud = undefined;
console.log(typeof x);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof emptyObj);
console.log(typeof ud)
console.log(typeof myFunc)

console.log(x.constructor.name)
;
*/

// =============================================== type conversion ===================================

            // --------------------- parse int ====================
/*
let str = "55.59";
let num = parseInt(str);
let num1 = parseFloat(str);

console.log(str);
console.log(num);
console.log(num1);
*/

    //   ===================== To string =======================
/*
let num = 51;
let str = num.toString();
console.log(typeof(str)); 
console.log(str);
*/
    //   --------------------- To fixed ----------------
/*
let num = 585321.684512.toFixed(3);
console.log(num);
*/
// =================================== Date Time ==============================
/*
let date = new Date();
let time = date.getTime();
console.log(time);

let dt = new Date(time);
console.log(dt);
*/
// ============================== booleans to number ================

let bool = true;
let num= Number(bool);
console.log(num);

let num2 = 5;
let bool1 = Boolean(num2);
console.log(bool1);