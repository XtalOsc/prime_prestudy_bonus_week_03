function add(num){
  num += 2;
  return num;
  }
function multiply(num){
  num *= 3;
  return num;
  }
function subtract(num){
  num -= 4;
  return num;
  }

var total = multiply(add(subtract(22)));

alert(total);