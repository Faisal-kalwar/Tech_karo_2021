function cToF(){
    // Get value from input and store in Ctemp
    var cTemp = document.getElementById("Csef").value;
    var cToFahr = cTemp * 9 / 5 + 32;
    var message = cTemp + ' °C is ' + cToFahr + ' °F.';
    // Acess span 
    let temptValue = document.querySelector('h3 > span');
    console.log(temptValue);
    temptValue.innerHTML = message;
};
function fToc() {
    var ftemp = document.getElementById("FseC").value;
    var fToC = (ftemp-32)*5/9;
    var message = ftemp + ' °F is ' + fToC +' °C.';
    let temptValue = document.querySelector('h3 > span');
    console.log(temptValue);
    temptValue.innerHTML = message;
};