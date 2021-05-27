function sum(){
    let x = parseInt(document.querySelector("#num1").value);
    let y = parseInt(document.querySelector("#num2").value);
    let sum = x + y;
    let message = 'Sum of ' + x + ' and ' + y + ' is ' + sum;
    let sumElement = document.querySelector("h3 > span");
    console.log(sumElement);
    sumElement.innerHTML = message;
}