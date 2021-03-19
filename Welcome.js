console.log("Hi Welcome to sports site !");
var fName = prompt("Enter your First Name , please");
var lName = prompt("Enter your Last Name , please");
alert("Welcome" + " " + fName + " , i'll take you in a tour ");
var yes = prompt("Press \"y\" to continue");


if (yes == 'y') {
    confirm("Press Ok!")
}
else {
    alert("Thank you for your time !");
}

document.getElementById("welcome").innerHTML="Welcome " + fName + " " + lName;



// var colorForm = document.getElementById("colorForm");
// colorForm.addEventListener('submit',handlesubmit);
// function handlesubmit(event){
//     event.preventDefault();
//     console.log(event.target.color.value);
// }
// var colorFo = document.getElementById("ColorFf");
// console.log(colorFo.value);


// function myFunc() {
//     var x = document.getElementById("ColorFf").selectedIndex;
//     var a = document.getElementsByTagName("option")[x].value;
//     var b = document.getElementsByTagName('pre');
//     for (let i = 0; i < b.length; i++) {
//         b[i].style.color = a;
//     }
// }



