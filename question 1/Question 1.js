//To take 3 numbers and print the largest number
 




document.getElementById("btn").addEventListener("click", ()=>{
  var num1 = parseInt(document.getElementById("number1").value);
var num2 = parseInt(document.getElementById("number2").value);
var num3 = parseInt(document.getElementById("number3").value);
 check(num1,num2,num3);
});

function check(num1 , num2 ,num3){
  if (num1 == num2 || num2 == num3 || num1 == num3) {
document.writeln("<h1>2 no are same please reload and enter again</h1>");
} else if (num1 > num2) {
    if (num1 > num3) {
      document.write(`<h1>${num1} is The Largest Number</h1>`);
    } else if (num3 > num1) {
      document.write(`<h1>${num3} is The Largest Number</h1>`);
    }
  } else if (num2 > num3) {
    document.write(`<h1>${num2} is The Largest Number</h1>`);
  } else {
    document.write(`<h1>${num3} is The Largest Number</h1>`);
  }
}

