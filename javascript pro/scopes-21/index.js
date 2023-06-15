// {
//     let x = 1;
//     const y = 2;
//     var num = 12;
// }
/*
function blockscope(){
    let x =1;
    if(true){
        let y = 2;
        console.log(x);
        console.log(y);
    }
    console.log(x);
    console.log(y);
}
blockscope();
*/


// ================================= Local scope ====================
/*
function myFunction(){
    var x = 1;
    let y = 2;
    const z = 3;
}

function blockScope(){
    var x = 1;
    if(true){
        var y = 2;
        console.log(x);
        console.log(y);
    }
    console.log(x);
    console.log(y);
}
blockScope();
*/

// =============================== Global Scope +++++++++++++++++++++++++++

 