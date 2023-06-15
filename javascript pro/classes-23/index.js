/*
class rectangle{
    static myStaticField = "foo"
    // width;
    // height;
    constructor(w,h){
        this.width = w;  // Implicite fields.
        this.height = h;
        this.area = this.width*this.height;
    }
    setWidth(wi){
        this.width = wi;
    }
    setHeight(hi){
        this.height = hi;
    }
    sayHello(){
        console.log("hello user");
    }
    areaa(){
        return this.height*this.width
    }
}

const rectangle1 = new rectangle(20,5);  //Creating Instance of rectangle class
console.log(rectangle1.width)
console.log(rectangle1.height)
console.log(rectangle1.area)
rectangle1.sayHello(); 
console.log(rectangle1.setWidth(50));
console.log(rectangle1.setHeight(30));
console.log(rectangle1.areaa());
*/

// ============================ Static Blocks ==========================
/*
class myClass{
    static myStaticField = "suraj";
    instanceField = "Instance";
    static staticMethod(){
        console.log("Static method called.");
    }
    instanceMethod(){
        console.log("Instance method")
    }
    static{
        console.log(`Static block : ${myClass.myStaticField}`);
        const instance = new myClass();
        console.log(instance.instanceField);
        instance.instanceMethod(); 
    }
}
myClass.staticMethod() 
*/
/*
class myClass{
    constructor(){
        this.instanceVar = "Hello";
    }
    static{
        this.staticField = "World";
    }
}
const myObj = new myClass();
console.log(myObj.instanceVar);
console.log(myClass.staticField); 
*/

class person{
    #name;
    constructor(name){
        this.#name = name;
    }
    #doSomething(){
        // console.log("Private method called");
        return this.name;
    }
    getMyName(){
        return this.#doSomething();
    }
}
// const myObj = new myClass();
// console.log(myObj.instanceVar);
// console.log(myClass.staticField);
const p = new person("Suraj");
console.log(p.getMyName());