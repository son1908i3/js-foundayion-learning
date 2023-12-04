//CallBack
// function print(name){
//     console.log(`My name is ${name}`);
// }

// function decorateName(name){
//     console.log(`My fancy name is ${name}`);
// }

// function decorateNameTet(name){
//     console.log(`Happy new year ${name}`);
// }


// function printSomeThing(names,callback){
//     for(const name of names){
//         callback(name)
//     }
// }

// let names = ["Teo", "Ti","TIT"];
// printSomeThing(names,print);
// printSomeThing(names,decorateName);
// printSomeThing(names,decorateNameTet);


//Asynchronous
// function doSomething(){
//     console.log("ahihi");
// }
// setTimeout(doSomething,3000);

// console.log("hehehe");


// let x =0;
// function loadDataFormFile(x){
//     return x +5;
// }


// setTimeout(loadDataFormFile,3000);
// console.log(x);

//Promise
// let promise  = new  Promise(function(resolve,reject){
//     let flag = true;
//     if(flag){
//         resolve("OK");
//     }else{
//         reject("Error");
//     }
// });
// promise.then(function(value,mess){
//     console.log("Ahihi" + value + " " + mess);
// },function(error,mess){
//     console.log("Ahuhu" + error + " " + mess);

// });

//vd
// function tinhTong(a, b, callback) {
//     var result = a + b;
//     callback(result);
// }
// function ketqua(result) {
//     console.log('result: ' + result);
// }
// tinhTong(5, 10, ketqua);
// function solveQuadraticEquation(a, b, c, callback) {
//     var delta = b * b - 4 * a * c;
//     if (delta > 0) {
//       var x1 = (-b + Math.sqrt(delta)) / (2 * a);
//       var x2 = (-b - Math.sqrt(delta)) / (2 * a);
//       callback(null, { x1: x1, x2: x2 });
//     } else if (delta === 0) {
//       var x = -b / (2 * a);
//       callback(null, { x: x });
//     } else {
//       callback("Phương trình không có nghiệm thực", null);
//     }
//   }
//   function handleResult(error, result) {
//     if (error) {
//       console.error('Đã xảy ra lỗi:', error);
//     } else {
//       console.log('Nghiệm của phương trình:', result);
//     }
//   }
//   solveQuadraticEquation(1, -3, 2, handleResult);


