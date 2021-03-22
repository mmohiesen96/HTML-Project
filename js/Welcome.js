function welcomeFunc(){

console.log("Hi Welcome to sports site !");
var fName = prompt("Enter your First Name , please");
var lName = prompt("Enter your Last Name , please");
var fullName = fName + " " + lName ;
alert("Welcome" + " " + fullName + " , i'll take you in a tour ");
var yes = prompt("Press \"y\" to continue");


 if (yes == 'y') {
     confirm("Press Ok!")
 }
 else {
     alert("Thank you for your time !");
 }

if(fName != "" && lName != "") {
    document.getElementById("welcome").innerHTML="Welcome " + fullName;
}
else{
    document.getElementById("welcome").innerHTML = "Welcome " + "Guest"
}



}

welcomeFunc();


