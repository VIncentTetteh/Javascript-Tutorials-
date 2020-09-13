var btnIncrease = document.getElementById('btn-increase');
var btnDecrease = document.getElementById('btn-decrease');
var text = document.getElementById('text');

btnDecrease.addEventListener('click',()=>{
   var initText =  text.style.fontSize
   initText -= 1;
});


btnIncrease.addEventListener('click', () => {
    text.style.fontSize = "20px";
})

