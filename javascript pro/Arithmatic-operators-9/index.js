// ====================== '  +  ' ============================
/*
let a = 10;
let b = 25;
let c = a + b;
console.log(c);

let x = "hello";
let y = "Suraj";
let z = x + y;
console.log(z);
*/

// ========================= '  -  ' ================================
/*
let a = 10;
let b = 5;
let c = a - b;
console.log(c)
*/

// ======================== '  *  ' =============================
/*
let a = 10;
let b = 5;
let c = a * b;
console.log(c);
*/

// ======================== '  /  ' ==============================
/*
let a = 10;
let b = 5;
let c = a / b;
console.log(c);
*/

// ========================= '  %  ' ===========================
/*
let a = 10;
let b = 5;
let c = a % b;
console.log(c);
*/

// ========================= ' ++ ' ===================
/*
let a = 10;
a++;
console.log(a);
*/

// ============================ ' -- '=======================
/*
let a = 10;
a--;
console.log(a);
*/

// ========================= Assignment operator =====================
/*
let a = "hii welcome to the hell";
*/
// ========================== Addition Assignment operator ================
/*
let a = 10;
a += 5;
console.log(a);
*/

// ======================== Substraction assignment operator =================
/*
let a = 10;
a -= 5;
console.log(a);
*/

// ========================= multiplication assignment operator ============
/*
let a = 10;
a *= 5;
console.log(a);
*/

// ================================== Division assignment operator =============
/*
let a = 10;
a /= 5;
console.log(a);
*/

// ============================ modulus assignment operator ==================
/*
let a = 10;
a %= 5;
console.log(a);
*/

// ========================== '  **  ' Exponential operator ======================
/*
let a = 10;
a **=5;
console.log(a);
*/

// ====================== Compound assignment operator ========================
/*
let a = "Hello ";
a += "word";
console.log(a);
*/


// ========================= String Operators =========================
/*
let str1 = "Hello";
let str2 = "hello";
// let isEqual = str1 == str2;
let isEqual = str1 != str2;
console.log(str1.length);
console.log(str1[2]);
console.log(isEqual);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.substring(1,3));
console.log(str1.indexOf("l"));
*/

//  ========================== '  ===  ' Strict Equality oprtator=======================
/*
let a = 10;
let b = "45";
console.log(a === b);
*/

// ======================== Strict Not Equals to operator ' !== ' ===============
/*
let a = 10;
let b = 10;
console.log(a !== b);
*/

// ============================ Type Operator =========================
/*
let a = 15;
let b = "hello";
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
*/

// ============================ Instance of a data type ====================
let name;
let age;
function person(name,age){
    this.name = name;
    this.age = age;
}
let obj = new person("Suraj", 22);
console.log(obj instanceof person);
console.log(obj instanceof Object);
// person("suraj", 22)
// console.log(this.name);
// console.log(this.age);