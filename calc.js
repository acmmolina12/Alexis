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
    var answe = num1 - num2; 
    display.innerHTML = answe;
  }
   else if(selector.value === "*"){
    var answ = num1 * num2; 
    display.innerHTML = answ;
  }
   else if(selector.value === "/"){
    var ans = num1 / num2; 
    display.innerHTML = ans;
  }
  else if(selector.value === "powerof"){
    var an = Math.pow(num1,num2);
    display.innerHTML = an;
  }
  else if(selector.value == "square root"){
   var a = math.sqrt = num1 x num2;
   display.innerHTML = a;
  }
  
});