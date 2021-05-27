function check(){
    /*
    Acess Html input element
     Get acces of input html element
     Aceess h1 element    
    */
//  .1 Acess input element --Queryselector
    let inputElement = document.querySelector('input');
    console.log(inputElement);
//  .2 Get value of html input element
    let inputValue = inputElement.value;
    console.log(inputValue);

//  .3 h1
    let headingElement = document.querySelector('h1 > span');
    console.log(headingElement)

    headingElement.innerHTML = inputValue;


}