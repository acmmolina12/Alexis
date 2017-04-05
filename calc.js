var num1input = document.getElementById("num1");
var selector = document.getElementById("selector");
var num2input = document.getElementById("num2");
var solve = document.getElementById("solve");
var display = document.getElementById("display");

solve.addEventListener("click", function(){
  var num1 = num1input.value;
  var num2 = num2input.value;
  
  
  
 if(selector.value === "+"){
    var answer = +num1 + +num2;
    display.innerHTML = answer;
  }
  
  
  
  else if(selector.value === "-"){
     answer = num1 - num2; 
    display.innerHTML = answer;
  }
   else if(selector.value === "*"){
   answer = num1 * num2; 
    display.innerHTML = answer;
  }
   else if(selector.value === "/"){
   answer = num1 / num2; 
    display.innerHTML = answer;
  }
  
  
  else if(selector.value === "powerof"){
   answer = Math.pow(num1,num2);
    display.innerHTML = answer;
  }
  
  
  else if(selector.value === "sqrt"){
   answer = Math.sqrt(num1);
   display.innerHTML = answer;
  }
  
});