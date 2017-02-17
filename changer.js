// Creates Variables and saves DOM Elements to each
var newBGColor=document.getElementById("newBGColor");
var colorChangeButton =document.getElementById("colorChangeButton");

colorChangeButton.addEventListener("Click", function (){ {

    document.body.style.backgroundcolor = newBGColor.value;
})