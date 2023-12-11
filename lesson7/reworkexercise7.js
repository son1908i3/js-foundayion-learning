// function isDivideCompleted(players){
//     for(const player of players){
//         if(player.length < 13){
//             return false;
//         }
//     }
//     return true;
// }
// function divideCards(numberOfPlayers){
//     if(Number.isSafeInteger(numberOfPlayers) && numberOfPlayers >=2 && numberOfPlayers <=4){
//         //chia bai
//         const baseCards = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"];
//         const fullCards = [];
//         for(const card of baseCards){
//             fullCards.push(card + "♥");
//             fullCards.push(card + "♦");
//             fullCards.push(card + "♣");
//             fullCards.push(card + "♠");
//         }
//         console.log(fullCards);
//         const players = new Array(numberOfPlayers);
//         console.log(players);
//         for(let i = 0; i < numberOfPlayers;i++){
//             players[i] = [];
//         }
//         console.log(players);
//         const pickedCards = [];
//         while(!isDivideCompleted(players)){
//             for(let i =0 ; i< players.length; i++){
//                 let j;
//                 do{
                  
//                     j = Math.floor(Math.random() * fullCards.length);

//                 }
//                 while(pickedCards.includes(fullCards[j]));
//                 players[i].push(fullCards[j]);
//                 pickedCards.push(fullCards[j]);
//             }
//         }
//         return players;
//     }else{
//         throw new Error("Invalid number of players");
//     }
// }
// console.log(JSON.stringify(divideCards(2)));


// //Clock
// function clock(seconds,callBack){
//     callBack(seconds);
// }

// async function countUp(seconds){
//     for(let i = 0; i < seconds;i++){
//         await new Promise(resolve=> setTimeout(resolve,1000));
//            console.log("Count up "+ (i +1));
       
//     }
// }
// async function countDown(seconds){
//     for(let i  = seconds; i > 0;i--){
//         await new Promise(resolve=> setTimeout(resolve,1000));
//            console.log("Count down "  + i);
       
//     }
// }
// clock(5,countUp);
// clock(5,countDown);
