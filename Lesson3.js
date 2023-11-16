
// const arr = new Array("A","B","C");
// console.log(arr);


// const arr = new Array(1,2,3);
// console.log(arr);
// const arr2 = new Array(20);
// console.log(arr2.length);
// console.log(arr2[10]);


// const arr = [1,"abc",{
//     ten:"CCC",
//     age:"u40"
// },["x","y","z"]]
// console.log(arr);
// console.log(typeof arr);

// const arr = ["A","B","C"];
// arr[arr.length] = "BB";
// console.log(arr);

//them phan tu vao` cuoi mang
// arr.push("XXXX");
// console.log(arr);

//them phan` tu vao` dau` mang
// arr.unshift("YYYY");
// console.log(arr);

//delete phan tu dau`
// arr.shift();
// console.log(arr);

//lay phan tu cuoi ra
// console.log(arr.pop());
// console.log(arr);

// const arr  = ["A","B","C"];
// arr.splice(1,1,"D","F");
// arr.splice(1,1);
// console.log(arr);

// const arr = ["A","B","C"];
// console.log(arr.splice(0,1));
// console.log(arr);

// const arr = ["A","B","C"];
// console.log(arr.join("-"));

// const arr = ["A","B","C"];
// delete arr[1];
// console.log(arr);

// const arr = ["C","B","C","D","F","E"];
// console.log(arr.sort().reverse());

// const arr =[1,7,10,12,20,29,30];
// console.log(arr.sort(function(a,b){return a-b}));

// const students = [
//     {
//         studentName:"Tan",
//         age: 10
//     },
//     {
//         studentName:"Minh",
//         age: 9
//     },
//     {
//         studentName:"Chi Ha",
//         age: 30
//     },
//     {
//         studentName:"Son",
//         age: 15
//     }
// ]
// console.log(students.sort(function(a, b) {return a.age - b.age}));

// console.log(new Date());
// console.log(new Date().toTimeString());
// console.log(new Date().toUTCString());
//console.log(new Date("10-11-2023"));

//new Date();
//new Date(date string);

//new Date(year,month);

// function doSomeThing(action){
//     console.log(action);
// }
// doSomeThing("a bc");

// function add(a ,b){
//     console.log(a+b);
// }
// add(1,10);
// add(2,17);

// let a = add(1,2);
// console.log(a);

// function add(a,b){
//     return a+b;
// }
// let a = add(1,2);
// console.log(a);

// const add = function(a,b){
//     return a+b;
// }
// console.log(add(2,9));

// const add = (a,b)=>{
//     return a+b;
// }
// console.log(add(2,9));

// let add =(a,b) =>{
//     return a+b;
// }
// add =1;
// console.log(add(2,9));

// console.log(add(2,9));
// function add(a,b) {
//     return a+b;
// }


//  function doSomeThing(x){
//      function dododo(y){
//          return x +y ;
//     }
//     function dadada(z){
//         return x+z;
//     }
//     return dododo(x) + dadada(x);
//  }
//  console.log(doSomeThing(3,2,1));

// function dodo(a){
//     return a * a;
// }
// function add(a,b){
//    return a +b(a -1);
// };
// console.log(add(2,dodo));

// function adds(a,b,...more){
//     console.log(a);
//     console.log(b);
//     console.log(more);
// }
// adds(1,0,6,8,9);

function dodo(){
console.log(arguments);
}
dodo(1,3,5,7,9);