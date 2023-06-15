/*
let num = 0.3 + 0.5;
console.log(num);

let num1 = (0.3 + 0.5).toFixed(3);
console.log(num1);

let x = 5 + 5;
console.log(x);

let y = "5" + 5;
console.log(y);
*/

// In the javascript number two strings can be multiply divide but cannot be add
/*
let x = "100";
let y = "10";

let z = x / y;
console.log(z);
*/

// ============================= NAN not a number ===========================
/*
let x = "100";
console.log(isNaN(x));

let y = "heloo";
console.log(isNaN(y));
*/

// ========================== Hexadecimal Number ========================
// A - F
// 0 - 9
// let a = 0x2A9F55B;
// console.log(a);

// ============================ toString =============================
// it is used to convert the number into the string.
/*
let x = 9;
let strNum = x.toString();
console.log(strNum);
*/

// =========================== toExponential =======================
/*
let x = 9.5648;
console.log(x.toExponential(3));
*/

// =========================== toPrecision ====================
/*
let x = 56.489651298;
console.log(x.toPrecision(4));
*/

// =========================== Valueof ============================
/*
let x = new Number(10);
let y = 10;
let equal = x.valueOf() === y.valueOf();
console.log(equal);
*/

// ========================= String to Number ===================
/*
let x = "123";
let y = Number(x);
console.log(typeof y);
console.log(y)
*/

// ========================== parseInt ==========================
/*
let x = "45682";
let y = parseInt(x);
console.log(y);
*/


// ========================== parseFloat ==========================

let x = "48964.4458";
let y = parseFloat(x);
console.log(typeof y);
console.log(y);