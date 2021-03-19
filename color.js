function myFunc() {
    var x = document.getElementById("ColorFf").selectedIndex;
    var a = document.getElementsByTagName("option")[x].value;
    var b = document.getElementsByTagName('pre');
    for (let i = 0; i < b.length; i++) {
        b[i].style.color = a;
    }
}

console.log(a);