var num1 = document.getElementById('firstNumber');
var num2 = document.getElementById('secondNumber');
var Ans = document.getElementById('answer');
var ele = document.getElementById('elements')
var logic1 = num1.innerHTML;
var logic2 = num2.innerHTML;
var answer = Ans.innerHTML;
ele.style.textAlign = 'center';
ele.style.marginTop = '10%';
ele.style.fontSize = '50px';

setInterval(() => {
    logic1 = ((logic1 > 0)? logic1 - 1: 0);
    logic2 = ((logic2 > 0) ? logic2 - 1 : 0);
    num1.innerHTML = logic1;
    num2.innerHTML = logic2;
    answer = logic1 + logic2;
    Ans.innerHTML = answer;

    

}, 1000);