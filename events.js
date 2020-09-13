//accessing the dom elements
var buttonClicker = document.getElementById('btn');
var divBtn = document.getElementById('div-btn');
//creating a function to perform a task
function whenClicked(){
    divBtn.style.backgroundColor = 'red';
    alert('button was click');
}
//calling event and asigning function to it
//buttonClicker.onclick = whenClicked;

// using event listener

divBtn.addEventListener('click',() =>{
    divBtn.style.backgroundColor = "orange";
});