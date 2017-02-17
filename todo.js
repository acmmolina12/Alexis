// All the four Var is what creates is gives evrything that we're adding meanings.  
var inp=document.getElementById("inp");
var btn=document.getElementById("btn");
var disp=document.getElementById("disp");
var coloring=document.getElementById("coloring")
// This allows us to click the button. 
btn.addEventListener("click",function(){
  disp.innerHTML+="<div>"+ inp.value+"</div>"
  // This is what gives the words the color.
  if (coloring.value === "brown green"){
  disp.innerHTML+="<div style='color:#333300'>"+inp.value+"</div>"
}

else if (coloring.value === "purple"){
  disp.innerHTML+="<div style='color:#9933ff'>"+inp.value+"</div>"
}

else if (coloring.value === "burgundy"){
  disp.innerHTML+="<div style='color:#800000'>"+inp.value+"</div>"
}

else if (coloring.value === "dark blue"){
  disp.innerHTML+="<div style='color:#000099'>"+inp.value+"</div>"
}
})


// This is when you touch the words and it removes them.
disp.addEventListener("click", function(evt){
    evt.target.parentNode.removeChild(evt.target);
})