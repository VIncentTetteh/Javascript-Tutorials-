//getting html element using id class and tag
// document.getElementById('header')
// document.getElementsByClassName('main')
// document.getElementsByTagName('h1')

// console.log("script loaded");

// using query selector
// document.querySelectorAll('.main')
// document.querySelector('.main')

// Manipulating elements in dom
// var countNumber = document.getElementById('count');
// var imageID = document.getElementById('imageElement');
// var setInitials = countNumber.innerHTML;

// setInterval(() => {
//     setInitials = ((setInitials > 0)? setInitials - 1:  0);
//     countNumber.innerHTML = setInitials;
//     const newLocal = '\img\instalation.jpg';
//     const newLocal2 = '\img\networking';
//     var imagePath = setInitials % 2 == 0 ? newLocal.jpg :newLocal2.jpg
//      imageID.src = imagePath;
// }, 1000);

//updating stylesheet in javascript

var styles = document.getElementById('colors');

styles.style.color = "blue";
styles.style.textAlign = "center"

var textUpdate = document.getElementById('texts');
var initialTexte = textUpdate.innerHTML;

setInterval(function() {
    initialTexte = initialTexte > 0 ? initialTexte -1 : 0 ;
    textUpdate.innerHTML = initialTexte
    textUpdate.style.fontSize = initialTexte * 100 + "px"

}, 1000)