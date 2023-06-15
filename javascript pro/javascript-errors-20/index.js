// ==============ry & Catch ===========================
/*
try{
    let a =22;
    let b =11;
    let res = a/b;
}catch(error){
    if(error instanceof TypeError){
        console.log("Type error ours");
    }else if(error instanceof RangeError){
        console.log("Range error occurs");
    }else{
        console.log("Error occurs.")
    }
    console.log(error);
};
*/

// =============================== throw ========================
/*
try{
    let a =22;
    let b =11;
    let res = a/b;
}catch(error){
    if(error instanceof TypeError){
        console.log("Type error ours");
        throw new Error("Error occurs");
    }else if(error instanceof RangeError){
        console.log("Range error occurs");
    }else{
        console.log("Error occurs.");
    }
};
*/
/*
function divide(a,b){
    if(b == 0){
        throw new Error("cannot divide by 0");
    }else{
        return a/b;
    }
};

console.log(divide(10,5));
*/

// =================================== finally =====================

try{
    let a = 10;
    let b = 0;
    let res = a/b;
}catch(error){
    console.log(error);
}finally{
    console.log("Finally code has been run");
};