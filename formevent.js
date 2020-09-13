var userName = document.getElementById('userName');
var password = document.getElementById('passWord');
var form = document.getElementById('forms');

userName.addEventListener('input',(event)=>{
    var changeInput = event.target.value;
    console.log(changeInput.toUpperCase());
});

userName.addEventListener('focusin',()=>{
    console.log('focus activated');
})

userName.addEventListener('focusout',()=>{
    console.log('focus deactivated');
})
form.addEventListener('submit',(e)=>{
   var submit =  e.target.value = "i was clicke";
   alert('i was clicked')
})
