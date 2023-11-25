//console.log("Lesson4")
// let a = "6";
// if(a == 5){
//     console.log("Equal 5");
// }else if(a ==6){
//     console.log("Equal 6");
// }else{
//     console.log("Not Equal");
// }


//dayIndex 0-> 6
// function getDayOfWeek(dayIndex){
  
//     if(dayIndex == 0){
//         return "Monday";
//     }
//     else if(dayIndex == 1){
//         return "TuesDay";
//     }
//     else if(dayIndex == 2){
//         return "Wednesday";
//     }
//     else if(dayIndex == 3){
//         return "Thursday";
//     }
//     else if(dayIndex == 4){
//         return "Friday";
//     }
//     else if(dayIndex == 5){
//         return "Saturday";
//     }
//     else if(dayIndex == 6){
//         return "Sunday";
//     }
//     else{
//         return "error";
//     }
// }
// console.log(getDayOfWeek(0));
// console.log(getDayOfWeek(1));
// console.log(getDayOfWeek(2));
// console.log(getDayOfWeek(3));
// console.log(getDayOfWeek(4));
// console.log(getDayOfWeek(5));
// console.log(getDayOfWeek(6));
// console.log(getDayOfWeek(7));


// let a = "6";
// if(a == 5){
//     console.log("Equal 5");
// } 
// if(a ==6){
//     console.log("Equal 6");
// }
// if(a!= 5 && a!= 6)
// {
//     console.log("Not Equal");
// }


// false
// null
// 0 
// NaN
// undefined
// the empty string ("")

// if(Infinity){
//     console.log("Haha");
// }else{
//     console.log("Hihi");
// }


// function add(a,b){
//     if(a != undefined && b!= undefined && a != null && b!= null && typeof a == "number" && typeof b == "number"){
//         return a+b;
//     }else{
//         return null;
//     }
// }

// let a =0;
// function learnSwitch(a){
//     switch(a){
//         case 0:
//         console.log("=0");
//         break;
//         case 1:
//         console.log("=1");
//         break;
//         default:
//         console.log("end");
//     }
// }
//learnSwitch(a);

// function switchTest(a){
//     switch(a){
//         case 0:
//             return "Monday";         
//         case 1:
//             return "Tuseday";   
//         case 2:
//             return "Wednesday";
//         case 3:
//             return "Thurday";
//         case 4:
//             return "Friday";
//         case 5:
//             return "Saturday";
//         case 6:
//             return "Sunday";
//         default:
//             return "error";
//     }
// }
// console.log(switchTest(0));
// console.log(switchTest(1));
// console.log(switchTest(2));
// console.log(switchTest(3));
// console.log(switchTest(4));
// console.log(switchTest(5));
// console.log(switchTest(6));
// console.log(switchTest(7));



// let a =0;
// function learnSwitch(a){
//     switch(a){
//         case 0:
//         console.log("=0");
//         break;
//         case 1:
//         case 2:
//         console.log("=1");
//         break;
//         default:
//         console.log("end");
//     }
// }
// learnSwitch(a);
// learnSwitch(1);
// learnSwitch(2);

// function add(a,b){
//     if(typeof a!=  'number' || typeof b!= 'number'){
//         throw "Invalid inout";
//         console.log("aaa");
//     }
//     console.log("bbb");
// }
// add("a",1);

// function divide(a, b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         throw "Invalid data";
//     }
//     return a / b;
// }
// try {
//     console.log(divide(null, 2));
// } catch (error) {
//     throw new Error("Invalid data 2");
// }
// finally{
//     console.log("Finally");
// }

// TypeError
// RangeError
// EvalError