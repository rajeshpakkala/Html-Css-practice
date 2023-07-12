function multiplyNumbers() {
  var num1 = document.getElementById("userVal1").value;
  var num2 = document.getElementById("userVal2").value;
  var total = num1 * num2;
  document.getElementById("results").textContent = total;    
};