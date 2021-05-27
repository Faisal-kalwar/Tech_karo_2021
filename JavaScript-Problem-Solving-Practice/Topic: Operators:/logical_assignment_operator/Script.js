function validate(){
    let userName = document.querySelector('#userName').value;
    let userPassword = document.querySelector('#userPassword').value;

    if (userName == "Faisal" && userPassword == "Faisal123") {
        alert("Login successfully");
    }
    else{
        alert("Sorry your have enter incorrect user_Id or password");
    }


}