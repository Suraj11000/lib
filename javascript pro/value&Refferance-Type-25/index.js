/*
 //------------------- Value type -----------------
let x = 10;
let y = x;
x = 20;

console.log(x);
console.log(y);


let arr1 = [1,2,3,4];
let arr2 = arr1;
arr1.push("SURAJ");
console.log(arr1);
console.log(arr2);
*/
/*
let x = 5;
let changeNum = (num)=>{
     num = 10;
     console.log(num);
}
changeNum(x);
console.log(x);
*/

// --------------------- Referance Type -----------------------
let car = ["Supra", "Mustang", "GTR"]
 function addToList(item,list){
    list.push(item);
    console.log(list);
 }
 addToList("URUS",car);
 console.log(car)