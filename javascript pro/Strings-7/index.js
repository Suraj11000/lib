// There are three types of string determination:
// 1) single qoutes.
// 2) double qoutes.
// 3) Bacticks.

// =========================== Single Qoute ====================================
/*
let single = 'you are the best.';
single = 'the value of a = '+2;
console.log(single);
*/

// ================================ Double Quotes ================================
/*
let double = "This is a double quote string.";
double = "The value is ="+15;
console.log(double);
*/
// ================================= Backtics ==================================
/*
let Backtics = `"This is a string by using a backtics"`;
let num = 55;
Backtics = `"The value of back is ${num}"`
console.log(Backtics)


let a =12;
let b =20;
var temp = `If you double the nom, the value will be ${double(11)}`;

function double(x){
    return x * 2;
};
console.log(temp);
*/
// ============================== Backtics multiline ===============================
/*
let temp = `hii this is chaman,
he doesnt like anyone,
he just want to eat a lots of stuff`;
console.log(temp);
*/

// ========================= Escape characters in javascript ======================
// 1) Backward slash = '\'
/*
let intro = 'i\'am program';
console.log(intro);

let introo = "i\"am the richest.";
console.log(introo);

let myFilePath = "C:\\Users\\shind\\Documents\\downloaded";
console.log(myFilePath);
*/
// ==================== Escape character for new line ======================
//  \n
//  \t
//  \r
//  \b
//  \f
//  \v

// ======================== Comparing two Strings ===========================
/*
let str1 = new String("hii");
let str2 = new String("hii");
console.log(str1.valueOf == str2.valueOf);
*/

// ====================== Find the length of string =========================
/*
let message = "Hello how are you";
console.log(message.length)
*/

// ===================== Upper & Lowercases ===========================
/*
let message = "Hii i am happy";
console.log(message.toUpperCase());

let message = "Hii i am happy";
console.log(message.toLowerCase());
*/

// ======================  Concatination in string ========================
/*
let message = "hello World";
console.log(message.concat(" you will die soon"))
*/
// =========================== index of ==========================
/*
let message = "hii welcome";
console.log(message.indexOf("w"));

let mess = "hii welcome to hell ";
console.log(mess.lastIndexOf("h"));
*/

// =========================== Slice ==========================
/*
let str = "Hey toffy is good dog."
console.log(str.slice(0,-1))
*/

// ========================== Substring ====================
/*
let str = "Hii welcome to the college.";
console.log(str.substring(4,10));
*/

// ======================== Replace ===================
/*
let message = "hii suraj, how are you.";
console.log(message.replace("suraj","Dhiraj"));

let str = "hii suraj, suraj is the best.";
console.log(str.replaceAll("suraj", "Bhushan"));
*/

// ========================= Split method =========================

// In this method we can spilt the string by using a character inside the string
let mess = "hii welcome, to the universe of a anaconda";
console.log(mess.split(","));