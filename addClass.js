var btn = document.getElementById('btn');
var hclass = document.getElementById('hclass');
var h2class = document.getElementById('h2class');
btn.addEventListener('click',() =>{
   if(h2class.classList == 'h2-class'){
       h2class.classList.remove('h2-class');
       hclass.classList.add('h-class');
   }
   else{
       h2class.classList.add('h2-class');
   }
});
