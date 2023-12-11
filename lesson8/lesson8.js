// class Car{
//     ten;
//     constructor(name){
//         this.ten = name;
       
//     }

//     constructor(name,color){
//         this.ten = name;
       
//     }
//     // set ten(name){
//     //     this.name = name;
//     // }
//     get ten(){
//         return this.name
//     }
// }
// let car = new Car();
// car.setName("BMW");
// console.log(car.ten());

//  car.name = ("sirius");
//  console.log(car.ten());

// class Color{
//     constructor(r,g,b){
//         this.value = [r,g,b];
//     }
//     get red(){
//         return this.value[0];
//     }
//     // set red(value){
//     //     this.value[0] = value
//     // }
// }
// const red = new Color(255,0,0);
// red.red = 0;
// console.log(red.red);//0

// class Car{
//     name;
//     color;
//     #branch;
//     constructor(name,color,branch){
//         this.ten = name;
//        this.color = color;
//        this.#branch = branch;
//     } 
//     set name(name){
//         this.name = name;
//     }
//     get name(){
//         return this.name
//     }
//     set color(color){
//         this.color = color;
//     }
//     get color(){
//         return this.color
//     }
//     get fullname(){
//         return this.#branch + this.name;
//     }
//     get branch(){
//         return this.#branch;
//     }
//     set branch(branch){
//         this.#branch = branch;
//     }
//     driving(){
//         console.log("I'm driving " + this.name);
//     }
//     decorate(decal){
//         console.log(this.name + "Ahihi I have a new decal " + decal);
//     }
// }
// let car = new Car("S600","BMW","Blue");

// let car2 = new Car();
// car.driving();
// console.log(car.name);
// console.log(car.color);
// console.log(car.fullname);
// car.branch = "TOyota";
// console.log(car.branch);

// class Animal{
//     name;
//     #defaultNAme = "Animal";
//     constructor(name){
        
//         this.name = name;
//     }
//     printName(){
//         let n = this.name == undefined | this.name == null ? this.#defaultNAme : this.name;
//         console.log("My name is: " + this.name);
//     }
//     #defaultAction(){
//         console.log("do something");
//     }
// }
// class Manamal extends Animal(){

// }
// class fish extends Animal(){
    
// }
// class Dog extends Animal{
//     constructor(name,legs){
//         super(name);
//         this.legs = legs;
//     }
//     sound(){
//         console.log("bark bark");
//     }
//     printName(message){
//         if(message != null && message != undefined){
//            this.printWithOutMessage();
//         }else{
//             this.legsprintWithOutMessage(message);
//         }
//     }
//     #printWithOutMessage(){
//         console.log("my name is: " + this.name);
//     }
//     #printWithOutMessage(message){
//         console.log("my name is: " + this.name + " " + message);
//     }

// }

// let dog1 = new Dog("Son");
// let dog2 = new Dog();
// dog1.printName("Ahihi");
// console.log(dog2.printName());

class Animal{
    constructor(){
        if(new.target === Animal){
            throw new Error ("Abstract class can not be createed!");
        }
    }
    eat(){
        throw new Error("Method \"eat()\" must be  implement by sub class");
    }

}
class Manamal extends Animal(){
    constructor(name){
        super();
        this.name = name;
    }
}
let animal = new Manamal("Monkey");
animal.eat();