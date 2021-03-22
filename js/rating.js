
function ratingFunc(){
var rating = prompt("Please rate us from 1 to 5");
var r = parseInt(rating);
for(let x = 1 ; x <= r ; x++) {
var img = document.createElement("img");
img.src = "images/star.png";
img.setAttribute("width","50")
img.setAttribute("height","50")
        var src = document.getElementById("foot").appendChild(img);; 
    }
}

ratingFunc();
