//  while loop

// var info = ["Faisal", "Ali", 13];
// var i = 0;
// while (i < info.length){
//     console.log(info);
//     i++;
//  }


//  for Each loop

// var colors = ["red", "blue", "green"];
// colors.forEach(function(color) {
//     console.log(color);
// });

// switch Statement
// let color = prompt('Enter color: ');

// switch(color) {
//     case 'red':
//         alert("color is red")
//         break;

//     case 'Blue':
//         alert("color is blue")
//         break;

//     case 'green':
//         alert("color is green")
//         break;

//     case 'yellow':
//         alert("color is yellow")
//         break;

//     default:
//         alert('color is not in list');
//         break;
// }

// let games = ["cricket", "football", "tenis", "Pubg"];

// for (let i = 0; i < games.length; i++){
//     if ( games[i] == "cricket"){
//         console.log("Criket exists");
//         break;
//     }
//     else{
//         console.log("cricket doesnot exists");
//     }
// }

let games = ["cricket", "football", "tenis", "Pubg"];
games.push("COD");
console.log(games);
games.unshift("Hockey");
console.log(games)
games.unshift("abc")
console.log(games);
games.shift();
console.log(games);
games.pop();
console.log(games);
games.splice(2,0,"Need for speed", "8 ball pool")
console.log(games);