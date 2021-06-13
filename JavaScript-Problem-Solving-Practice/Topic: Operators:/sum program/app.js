function sum(){
    let x = parseInt(document.querySelector("#num1").value);
    let y = parseInt(document.querySelector("#num2").value);
    let sum = x + y;
    let message = 'Sum of ' + x + ' and ' + y + ' is ' + sum;
    let sumElement = document.querySelector("h3 > span");
    console.log(sumElement);
    sumElement.innerHTML = message;
}
function sub(){
    let x = parseInt(document.querySelector("#num1").value);
    let y = parseInt(document.querySelector("#num2").value);
    let sub = x - y;
    let message = 'Sub of ' + x + ' and ' + y + ' is ' + sub;
    let sumElement = document.querySelector("h3 > span");
    console.log(sumElement);
    sumElement.innerHTML = message;
}
function multilcation(){
    let x = parseInt(document.querySelector("#num1").value);
    let y = parseInt(document.querySelector("#num2").value);
    let multilcation = x * y;
    let message = 'muliplication of ' + x + ' and ' + y + ' is ' + multilcation;
    let sumElement = document.querySelector("h3 > span");
    console.log(sumElement);
    sumElement.innerHTML = message;
}
function div(){
    let x = parseInt(document.querySelector("#num1").value);
    let y = parseInt(document.querySelector("#num2").value);
    let divison = x / y;
    let message = 'div of ' + x + ' and ' + y + ' is ' + divison;
    let sumElement = document.querySelector("h3 > span");
    console.log(sumElement);
    sumElement.innerHTML = message;
}