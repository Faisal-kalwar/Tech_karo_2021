function check(){
    // Acees input element
    let inputElement = document.querySelector("#name");
    console.log(inputElement);
    // Get value of input element
    let attrValue = inputElement.value;
    console.log(attrValue);

    let headingValue = document.querySelector('h1 > span');
    console.log(headingValue);

    // change content of h1 element
    headingValue.innerHTML = attrValue;

    let inputNubmer = document.querySelector("#number");
    console.log(inputNubmer);

    //get value of input element
    let inputValue = inputNubmer.value;
    alert(`The message has been sent on the ` +inputValue);  

}