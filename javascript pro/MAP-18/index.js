/*
const myMap = new Map();

myMap.set('name',"Suraj");
myMap.set(18,"Answer");
myMap.set(true,10);

const name = myMap.get("name");
const str = myMap.get(18);
const bool = myMap.get(true);
console.log(name);
console.log(str);
console.log(bool);

const hasage = myMap.has(18);
const hasage = myMap.delete(18);
console.log(hasage);
console.log(myMap.size);
*/
/*
const myObj = {
    name : "suraj",
    age : 45,
};

const myMap = new Map();
myMap.set(myObj,"This is a string");

console.log(myMap.get(myObj));
*/

/*
const myMap = new Map();
myMap.set("name","Suraj");
myMap.set(2,"Second");

for (const [key,value] of myMap) {
    console.log(key,value);
};
*/
/*
const myObj = {
    name : "Suraj",
    age : 55
};

for (const key in myObj) {
    console.log(key)
    console.log(myObj[key]);
};
*/
/*
const myMap = new Map();
myMap.set("age",30);
myMap.set("name","Suraj");
myMap.set("suraname","Shinde");

console.log(myMap.size);
*/
/*
const object = {
    name : "Suraj",
    age : 55,
}
let count = 0;
for (const key in object) {
    count++;
};
console.log(count)
*/

// ========================= iteration in map =======================
/*
const myMap = new Map();
myMap.set("name","Suraj");
myMap.set("age",22);

myMap.forEach(function(value,key){
    console.log(key,value);
});
*/
// ============================= Usecases of Map ===========================
/*
const myMap = new Map();
const keyString = "A String";
const keyObj = {};
const keyFunc = function(){

}

myMap.set(keyString,"Value is 'a string'");
myMap.set(keyObj,"Value is 'Empyty object'");
myMap.set(keyFunc,"Value 'empty function'");

console.log(myMap.get(keyString));
console.log(myMap.get(keyObj));
console.log(myMap.get(keyFunc));
*/
/*
const myMap = new Map();
myMap.set(NaN,"Not a number");
console.log(myMap.get(NaN));
console.log(myMap)
*/

/*
const myMap = new Map();

myMap.set(true,"Boolean");
myMap.set("name","String");
myMap.set(NaN,"Not a Number");
myMap.set(18,"A number");

for (const [key,value] of myMap) {
    console.log(key,value);
};

for (const [key,Value] of myMap.entries()) {
    console.log(`${key} = ${Value}`);
}

for (const key of myMap.values()) {
    console.log(`${key}`);
}

// ======================== betting method ===================

myMap.forEach(function(key,value){
    console.log(`${key} = ${value}`);
});
*/

/*
const myMap = new Map([
    ["apple",1],
    ["banana",2],
    ["mango",3],
    ["orange",4],
])

myMap.forEach(function(key,value){
    console.log(`${key} = ${value}`);
});
*/

// ============================= Converting an Map to an array ==================
/*
const data = [
    ["apple",1],
    ["banana",2],
    ["mango",3],
    ["orange",4]
];

const myMap = new Map(data);

myMap.forEach(function(key,value){
    console.log(`${key} = ${value}`);
});

console.log(myMap.get("mango"));

console.log(Array.from(data));

console.log(...myMap);
*/

// =========================== Cloaning a map ====================
/*
const originalMap = new Map([
    [1,"one"],
    [2,"Two"],
    [3,"Three"]
]);

let cloneMap = new Map(originalMap);
cloneMap.set("name","Suraj");

console.log(originalMap);
console.log(cloneMap);
*/

// ============================== Mearging the Map ============================
/*
let firstMap = new Map([
    [1,"one"],
    [2,"Two"],
    [3,"Three"]
]);

let secondMap = new Map([
    [4,"four"],
    [5,"five"],
    [6,"Six"]
]);

let mergeMap = new Map([...firstMap,...secondMap]);
console.log(mergeMap); 
*/

/*const mapsArray = [firstMap, secondMap];
const mergeMap = new Map();
mapsArray.forEach(function(Map){
    Map.forEach(function(key,value){
        mergeMap.set(key,value);
    })
});
console.log(mergeMap);
*/
