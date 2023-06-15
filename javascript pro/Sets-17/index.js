const mySet = new Set([1,2,3,4]);

// =========================== ADD , DELETE =========================
/*
mySet.add(5);
mySet.add("Suraj");
mySet.delete(2);
*/

// =========================== HAS , CLEAR , SIZE ========================
/*
console.log(mySet.has(4));
console.log(mySet.clear());
console.log(mySet.size); 
console.log(mySet);
*/

// ============================ FOR EACH ==========================
/*
mySet.forEach(element => {
    console.log(element)
});
*/
// ============================ FOR OF ============================
/*
for (const x of mySet) {
    console.log(x);
};
*/

// =============================== Entries =========================
/*
for (const [key,value] of mySet.entries()) {
    console.log(key,value);
}
*/

// ======================== KEY Values Method =====================
/*
for (const value of mySet.values()) {
    console.log(value);
}

for (const key of mySet.keys()) {
    console.log(key);
};
*/

// ========================== Union =============================
/*
const setA = new Set([1,2,3,4]);
const setB = new Set([2,3]);
const setC = new Set([3,4,5,6,7,8,9,10]);

function union(setA,setB){
    const uni = new Set(setA);
    for (const x of setB) {
        uni.add(x);
    }
    return uni;
}
const newfun = union(setA,setC);
console.log(newfun);
*/

// ============================= Intersection ======================
/*
const setA = new Set([1,2,3,4]);
const setB = new Set([2,3]);
const setC = new Set([3,4,5,6,7,8,9,10]);

function Intersection(setA,setB){
    const intersec = new Set();
    for (const elem of setB) {
        if(setA.has(elem)){
            intersec.add(elem);
        }
    }
    return intersec
}

console.log(Intersection(setA,setB));
*/

const arr = [1,2,3,4,1,2,5,5];
const set = new Set(arr);
console.log(set);

const newArr = [...new Set(arr)];
console.log(newArr);

const str = "Hii will you die for your mom.";
const strr1 = new Set(str);
console.log(strr1);
