// ======================== get element by id ==========================
/*
let myElement = document.getElementById('my-element');
// console.log(myElement.innerHTML);
myElement.innerHTML = "This is modified";

let myClass = document.getElementsByClassName("my-class");
console.log(myClass);

let myTag = document.getElementsByTagName("div");
console.log(myTag);
*/
// ========================= Query Selectors ========================
/*
let myQuerry = document.querySelector("#my-id .my-heading");
console.log(myQuerry)

let myAllQuerry = document.querySelectorAll("#my-id .my-class");
console.log(myAllQuerry);
myAllQuerry.forEach((item)=>{
    console.log(item.textContent);
});
*/

// ============================ Inner Html prop ======================
/*
let myElement = document.getElementById("my-element");
console.log(myElement.innerHTML);
console.log(myElement.innerHTML = "This is modified Sring");
console.log(myElement.innerHTML += "Its my mercy");
*/

// ========================== Text Content prop ====================
/*
let myElement = document.getElementById("my-element");
console.log(myElement.textContent);
console.log(myElement.textContent = "I have modified the string using textcontent.");
console.log(myElement.textContent += "You all die soon");
*/

/*
let newDiv = document.createElement("div");
newDiv.textContent = "New Div"
let myElement = document.getElementById("my-element");
myElement.appendChild(newDiv);
myElement.removeChild(newDiv);
*/

// ======================== Style Prop in DOM ==============================
/*
let myEle = document.querySelector("#my-element");
console.log(myEle.style.backgroundColor);
console.log(myEle.style.backgroundColor = "red");
console.log(myEle.style.fontSize = "22px")
*/

// --------------------------- Class Prop -------------------------------------------------
/*
const myId = document.querySelector(".myId");
myId.addEventListener("click",function(){
myId.className += " blue";
});
*/
// =================================== Contains =========================
/*
let myId = document.querySelector(".myId");
console.log(myId.classList.toString());
if (myId.classList.contains("second")){
    myId.style.backgroundColor = "green";
}else{
    myId.style.backgroundColor = "red";
};
*/

// ======================= Toggle ===============================
/*

let myClass = document.querySelector(".myId");
myClass.addEventListener("click", function(){
    myClass.classList.toggle("blue");
});
*/

// =========================== Set ==========================
/*
let myClass = document.querySelector(".myId");
myClass.setAttribute("style", "background-color: tomato")
*/

// ======================== Add event listner ====================
/*
const myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click",()=>{
    document.body.style.backgroundColor = "grey";
});
*/
        //    --------------------- onclick ------------------
        /*
const myBtn = document.getElementById("myBtn");
myBtn.onclick = ()=>{
    document.body.style.backgroundColor = "grey"
}
myBtn.ondblclick = ()=>{
    document.body.style.backgroundColor = "orange"
}
*/

// ====================== mouse events ======================
/*
 const myClass = document.getElementById("my-element");

 myClass.addEventListener("click",()=>{
    console.log("Event Clicked")
 });

 myClass.addEventListener("mouseenter",()=>{
    console.log("Event mouse enter")
 });

 myClass.addEventListener("mouseleave",()=>{
    console.log("Event mouse leave")
 });

 myClass.addEventListener("mousedown",()=>{
    console.log("Event mouse down")
 })

 myClass.addEventListener("mouseup",()=>{
    console.log("Event mouse up")
 })
*/
/*
const myClass = document.getElementById("myId")
myClass.addEventListener("blur",()=>{
    console.log("the focus is shifted out the input field");
});


myClass.addEventListener("copy",()=>{
    console.log("text successfully copied");
});

myClass.addEventListener("cut",()=>{
    console.log("cut succsessfully");
});

myClass.addEventListener("paste",()=>{
    console.log("paste succsessfully");
});

myClass.addEventListener("dblclick",()=>{
    console.log("Double clicked is not allowed");
});

myClass.addEventListener("focus",()=>{
    console.log("you can enter the input field");
});

myClass.addEventListener("select",()=>{
    console.log("you have selected the text.");
});
*/

// ========================== Drag and Drop ===========================
/*
const drag = document.getElementById("drag");
drag.addEventListener("dragstart", dragStart);
drag.addEventListener("dragend", dragEnd);

const drop = document.getElementById("drop");
drop.addEventListener("dragenter",dropEnter)
drop.addEventListener("dragover",dropOver)
drop.addEventListener("dragleave",dropLeave)
drop.addEventListener("drop",dragDrop)

function dragStart(event){
    event.dataTranfer.setData("text/plain", event.target.id);
    event.dataTranfer.effectAllowed = "move";
}

function dragEnd(event){
    event.dataTranfer.clearData();
}

function dropEnter(event){
    event.preventDefault();
    event.target.classList.add("dragOver")
}

function dropOver(event){
    event.preventDefault();
    event.dataTranfer.dropEffect = "move";
}
function dropLeave(event){
    event.target.classList.remove("dragOver")
}

function dragDrop(event){
    event.preventDefault();
    const data = event.dataTranfer.getData("text/plain")
    const element = document.getElementById(data)

    event.target.appendChild(element);
    event.target.classList.remove("dragover")
}
*/

// ================================ Window Events ================================
/*
window.addEventListener("load",()=>{
    alert("Web loaded")
    console.log("Window load succsessfully")
});

window.addEventListener("unload",()=>{
    alert("Web loaded")
});

window.addEventListener("resize",()=>{
    document.getElementById("container").textContent = `${window.innerHeight} x ${window.innerWidth}`;
});

window.addEventListener("resize",()=>{
    console.log(`${window.innerHeight} x ${window.innerWidth}`)
    if(window.innerHeight == 400 & window.innerWidth ==800){
        console.log("You have resize the window")
    }
});
*/
 
// ================================= Scroll ======================
/*
window.addEventListener("scroll",()=>{
    let container = document.getElementById("container");
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    container.textContent = `scrolled : ${scrollTop}px`;
    console.log(`scrolled : ${scrollTop}px`)
});
*/

// ==================================== Media Events ===============================

const video = document.querySelector('video');
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
playBtn.addEventListener("click",()=>{
    video.play();
})

pauseBtn.addEventListener("click",()=>{
    video.pause();
})
