// ======================= Procedure programing ======================
/*
function calculateSum(a,b,c,d){
    return a+b+c+d;
};
console.log(calculateSum(1,2,3,4));
*/
// ================================ Object oriented programming ==================
/*
class Calculator{
    constructor(a,b,c,d){
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    calculateSum(){
        return this.a+this.b+this.c+this.d;
    }
}

const mycalculator = new Calculator(1,2,3,4);
console.log(mycalculator.calculateSum());
*/

// ==================== Enscapsulation in OOPs =======================
/*
class BankAccount{
    constructor(accNo, accHolder, accBal){
        this.accNo = accNo;
        this.accHolder = accHolder;
        this.accBal = accBal;
    }
    deposite(amount){
        this.accBal += amount;
        console.log("Desosited succssessfully, New balalance = "+this.accBal);
    }
    withdraw(amount){
        if(this.accBal >= amount){
        this.accBal -= amount;
        console.log("Withdraw succsessful. Current balance = "+this.accBal);
        }
    }
}

const myAccount = new BankAccount(45,"Suraj",100000);
console.log(myAccount.accBal);
console.log(myAccount.withdraw(5000));
console.log(myAccount.deposite(25000));
*/

// ======================== Abstraction In OOPs ===============================
/*
class BankAccount{
    constructor(accBal, accNo, intRate){
        this.accBal = accBal;
        this.accNo = accNo;
        this.intRate = intRate;
    }
    deposite(amount){
        this.accBal += amount;
    }
    withdraw(amount){
        if(amount > this.accBal){
            throw new Error("Inssuficient balance");
        }else{
            this.accBal -= amount;
        }
    }
}

let newAcc = new BankAccount(10000,11,6);
newAcc.deposite(500);
newAcc.withdraw(1500);
let curbal = newAcc.accBal;
console.log(curbal)
*/

// =============================== Inheritance in OOps ======================
/*
class Animal{
    constructor(name,color,breed){
        this.name = name;
        this.color = color;
        this.breed = breed;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    getBreed(){
        console.log(`${this.name} has the ${this.breed} breed`)
    }
    getColor(){
        console.log(`${this.name} has the ${this.color} color`);
    }
}
class Dog extends Animal{
    bark(){
        console.log(`${this.name} is Barking Loudly`);
    }

}

class Cat extends Animal{
    meow(){
        console.log("Meow meow");
    }
}

let toffy = new Dog("Toffy", "Skin", "Golden-Retriver");
toffy.getBreed();
toffy.getColor();
toffy.bark();
toffy.eat();

let rio = new Dog("Rio", "Brown", "Indian");
rio.bark();
rio.eat();
rio.getBreed();
rio.getColor();

let balu = new Cat("Balu", "White", "Indoan");
balu.meow();
balu.eat();
balu.getBreed();
balu.getColor();
*/

// ========================= Polymorphism =============================
/*
        //  --------------- Method overriding -----------
class Animal {
    speak(){
        return "Animal Speaks";
    }
}
class Cat extends Animal{
    speak(){
        return "meow";
    }
}

let cat = new Cat();
console.log(cat.speak());

let anim = new Animal();
console.log(anim.speak());
*/

    //   ------------------- method overloading ----------------

class Animal{
    speak(name){
        return `${name} speaks`;
    }
}

class Cat extends Animal{
    speak(name, speakType){
        return `${name} ${speakType}`;
    }
}

let kitten = new Cat();
console.log(kitten.speak("catty", "meow"));

let anim = new Animal();
console.log(anim.speak("Yash"));