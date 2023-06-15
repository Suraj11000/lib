
// ================================ FOR Loop ===============================
/*
Syntax:
for(initialization;CSSConditionRule;increment/decodeURIComponent){

};
*/

/*
       ---------------- Increment -----------------
for(let x = 0; x < 5; x++){
    console.log(x);
}
        ------------------- Decrement -----------------
for(let x = 10; x > 1; x--){
    console.log(x);
};
*/

// ============================== FOR IN LOOP ==============================
/*
syntax 
for(variable in Object){

}

const person = {
    name : "suraj",
    age : 22,
};

for(let x in person){
    console.log(`${x} : ${person[x]}`);
};
*/

// ====================== FOR OF Loop ======================
/*
for (const iterator of object) {
    
}

const colors = ["red", "Green", "Yeloow", "Blue"];
for(let x of colors){
    console.log(x);
};

let str1 = "Hello wellcome to the hell";
for(let x of str1){
    console.log(x)
};
*/


// ========================= While Loop ====================
/*
while(condition){

    increment;
}

let x = 1;
while(x < 5){
    console.log("the value of x is = "+x);
    x++
};
*/

// ============================== DO WHILE Loop ==========================
/*
do{
// in this type the code will executed once even the conditon is false. 
}while(condition);

let num;
do{
    num = prompt("Please enter a numbe between 1 and 10 :");
}while(num < 1 || num > 10){
    alert("You have entered a wrong num");
};
*/