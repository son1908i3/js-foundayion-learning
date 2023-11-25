// let a = 5;
// while(a >0){
//     console.log("A hihi" + a);
//     a--;
// }


// let arr = [1,2,5,77,88,99];
// function sumOfArray(arr){
//     if(arr instanceof Array){
//         let result = 0;
//         let i = 0;
//         while(i < arr.length){
//             result += arr[i];
//             i++;
//         }
//         return result;
//     }
//     return null;
// }
// console.log(sumOfArray(arr));


// function locSoChan(arr){
//     if(arr instanceof Array && arr.length > 0){
//         let arraySoChan = [];
//         let i = 0;
//         const length = arr.length;
//         while(i < length){
//             if(arr[i] %2 === 0){
//                 arraySoChan.push(arr[i]);
//             }
//             i++;
//         }
//         return arraySoChan;
//     }
//     return null;
// }

// console.log(locSoChan(arr))


// let arr = [1,2,5,77,88,99];
// function sumOfArray(arr){
//     if(arr instanceof Array){
//         let result = 0;
//         let i = 0;
//         // while(i < arr.length){
//         //     result += arr[i];
//         //     i++;
//         // }
//        do{
//         result += arr[i];
//         i++;
//        }while(i< arr.length);
//        return result;
//     }
//     return null;
// }
// console.log(sumOfArray(arr));


// do{
//     console.log("Im here");
// }while(false);

// while(false){
//     console.log("Im here");
// }


// function findNumber(n){
//     do{
//         if(n%2 === 0){
//             console.log(n);
//         }
//         n--;
//     }while(n > 0)
// }
// console.log(findNumber(20));


// function sumOfNumber(n){
//     let result = 0;
//     do{
//         if(n % 2 == 0 && n % 3 == 0){
//             result += n;
//         }
//         n--;
//     }while(n > 0);
//     return result;
// }
// console.log(sumOfNumber(20));


//let a = [21,3,6456,5,6];
// for(let i = 0; i< a.length;i++){
//     console.log(a[i]);
// }
// for(let i = 0;i++){
//     console.log(a[i]);
// }


// function nhapN(n){
//     let sum = 0;
//     for(let i = 0; i < n; i++){
//         if(i % 2 === 0 && i % 3 === 0){
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(nhapN(20));


// let n = 20;
// while(n > 0){
//     console.log(n);
//     n -= 3;
//     if(n%2 ==0){
//         break;
//     }
// }


let a = [1,5,7,2322,76456,324324,55,4324];
function timSoChiaHetCho5(arr) {
    if (arr instanceof Array && arr.length > 0) {
        let result = null;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 5 === 0) {
                result = arr[i];
                break;
            }
        }
        return result;
    }
    return null;
}
console.log(timSoChiaHetCho5(a));



// firstFor:for(let i = 0;i <5;i++){
//     console.log("i"+i);
//     secondFor:for(let j = 0; j<7;j++){
//         console.log("j" +j);
//         if(j==3){
//             break firstFor;
//         }
//     }
// }


// let student = {
//     studentName: "Son",
//     age:20,
//     address:"123 Tran Tan"
// }
// for(key in student){
//     //console.log("Key:" + key + "value: " + student[key]);
//     console.log(`Key: ${key} value: ${student[key]}`);
// }

//  let a =[2133,321321,23453465,534];
// // for(let k in a){
// //     console.log(a[k]);
// // }
// a.xyz = "Ahihi";
// for(let k in a){
//          console.log(a[k]);
// }
// for(let k of a){
//         console.log(a[k]);
// }
