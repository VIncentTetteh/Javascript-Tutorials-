var kA = document.getElementById('kA');
var kB = document.getElementById('kB');
var kC = document.getElementById('kC');
var kD = document.getElementById('kD');

kA.addEventListener('click',(e)=>{
    var myaudio = new Audio('./audio/snare.mp3');
    myaudio.play();
})

kB.addEventListener('click', (e) => {
    var myaudio = new Audio('./audio/bass.mp3');
    myaudio.play();
})
kC.addEventListener('click', (e) => {
    var myaudio = new Audio('./audio/hihat.mp3');
    myaudio.play();
})

kD.addEventListener('click', (e) => {
    var myaudio = new Audio('./audio/tom.mp3');
    myaudio.play();
})

var keyPressed = document.body;
keyPressed.addEventListener('keydown', (e)=>{
    var pressed = e.keyCode;
    if(pressed === 65){
        var myaudio = new Audio('./audio/snare.mp3');
        myaudio.play();
    }
    else if (pressed === 66) {
        var myaudio = new Audio('./audio/bass.mp3');
        myaudio.play();
    }
    else if (pressed === 67) {
        var myaudio = new Audio('./audio/hihat.mp3');
        myaudio.play();
    }
    else if (pressed === 68) {
        var myaudio = new Audio('./audio/tom.mp3');
        myaudio.play();
    }
})

