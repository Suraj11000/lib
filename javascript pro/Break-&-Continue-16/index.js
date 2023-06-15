
// ========================== Break ===========================
/*
for(let i = 0; i <= 5; i++){
    if(i === 4){
        break;
    }
    console.log(i);
};
*/

// ======================== Continue ==========================
/*
for(let i = 0; i <= 5; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
};
*/

// ============================== Labels ========================

        //  ------------ Simple Label -----------------
/*
myLabel : for(let i = 0; i < 5; i++){
    if(i === 3){
        break myLabel;
    }
    console.log("This is the iteration muner"+i);
};
*/
    //    ---------------------- Label Blocks ------------------

oterBlock : {
    for(let i = 0; i < 5; i++){
        for(let j=0; j < 5; j++){
            if(i === 3 && j === 3){
                break oterBlock;
            }
            console.log(i,j)
        }
    }
}