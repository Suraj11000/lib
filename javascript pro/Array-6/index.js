// const myArray = ["Suraj", "Dhiraj", 45, true, "Shinde"];

// console.log(myArray);
// console.log(myArray[2]);
// console.log(myArray[4]);

// myArray[1] = "Rohit";
// myArray[3] = false;
// console.log(myArray);


//---------------------------- POP & PUSH in javascript -----------------------

/*myArray.push("Rohan");
console.log(myArray);

myArray.pop("Rohan");
console.log(myArray);  */

// -------------------- UNSHIFT & SHIFT ----------------------------
/*
    myArray.unshift("Harahal");
    console.log(myArray);

    myArray.shift("Harshal");
    console.log(myArray);
*/

//--------------------- LOOP IN ARRAY ------------------------------
/*
for(let i = 0; i < myArray.length; i++){
    console.log(i)
    console.log(myArray[i])
};
*/

// -------------------------CREATING AN ARRAY USING BRACKETS----------------------
/*
const myArray = [];
myArray[0] = "Suraj";
myArray[1] = 'Dhiraj';
myArray[2] = "Hanu";
myArray[3] = "Amol";
myArray[4] = "Kunal";
myArray[5] = "Vishal";
*/
/*
let numberOfItems = myArray.length - 1;
console.log(numberOfItems);
document.write(myArray);
document.write(myArray[numberOfItems]);
*/
/*
for (const element of myArray) {
    console.log(element)
    document.write(element)
}
*/
/*
myArray.forEach(element => {
    document.write(element)
});
*/

// ------------------------ Sorting An Array ------------------------
/*
const myArray = ["Dhiraj", "Bharat", "Baliram", "Asaram", "Suraj", "Harshal"];
myArray.sort();
console.log(myArray);

const num = [9,2,6,8,5,3,7,4,1];
num.sort();
console.log(num);

num.sort(function(a,b){
    return a-b;
})
num.reverse();
console.log(num);
*/

// ------------------------- Function In Javascript ---------------------------

            //    --------------- forEach() function --------------
/*
const person = ["Dhiraj", "Harshal", "Sara", "Rohan", "India"];
person.forEach(function(item,index,array){
    console.log(item,index);
});
*/
        //    ----------------- map() Function -------------
/*
const newPerson = person.map(function(item, index, array){
    if(item == "Sara"){
        return item;
    }
    return item + " Shinde";
});
console.log(newPerson);
*/
        //   ------------------ map() funcrion -------------
/*
const num = [1,2,3,4,5,6,7,8,9];
const newNum = num.map(function(item,index,array){
    return item * 3;
});
console.log(newNum);
*/
        //  --------------------- filter function ------------
/*
const num = [1,2,3,4,5,6,7,8,9,10];
const even = num.filter(function(item, index, array){
    return item % 2 === 0;
});
console.log(num);
console.log(even);
*/
        // --------------- reduce function ------------
/*
const num = [1,2,3];
const add = num.reduce(function(accumulator, item,index,array){
    return accumulator + item;
});
console.log(add);
*/

        //   -------------- Every function --------------
/*
const num  = [2,4,6,8,10,12,14,16];
const even = num.every(function(value, index, array){
    return value % 2 === 0;
})
console.log(even);
*/
    //    ------------------- some Function ---------------
/*
const num = [1,2,3,4,5,6,7,8,9,10,11,12,15,18];
const even = num.some(function(value,index,array){
    return value % 2 === 0;
});
console.log(even);
*/
        // ------------------- indexof function -----------------
/*
const num = [1,2,3,4,5,6,7,8,9];
const numIndex = num.indexOf(5);
console.log(numIndex);
*/
        // ----------------- lastindexof ---------------
/*
const data = ["Suraj", "Dhiraj", "Bharat", "Rohan", "Rohit", "Suraj"];
const lastIndex = data.lastIndexOf("Suraj");
console.log(lastIndex);
*/
        //   ------------------- includes function ----------------
/*
const myArray = ["Suraj", "Dhiraj", "Bharat", "Rohan", "Rohit", "Suraj"];
const include = myArray.includes("Suraj",2);
console.log(include);
*/

        //   ------------------ Array.from Function -------------
/*
const myArray = {
    0 : 1,
    1 : 2,
    2 : 3,
    length : 3
}
const index = Array.from(myArray);
console.log(index);
*/

        //  ----------------- keys function -------------------

const myArray = ["suraj", "dhiraj", "rohan", "rohit"];
const index = myArray.keys();
console.log(index.next());
console.log(index.next());
console.log(index.next());
console.log(index.next());
console.log(index.next());
