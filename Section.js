var sec = prompt("Please enter the section you want to visit : 'Choose 1 , 2 or 3'");

console.log(typeof(sec));
while (sec !='1' && sec != '2' && sec != '3') {
    sec = prompt("Only 1 , 2 or 3 , Please ..")
}

if(sec == '1'){
    document.getElementById("1").innerHTML = "Your Chosen section";
}
else if (sec == '2' ){
    document.getElementById("2").innerHTML = "Your Chosen section";
}
else{
    document.getElementById("3").innerHTML = "Your Chosen section";
} 