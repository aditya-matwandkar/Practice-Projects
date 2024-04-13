let drum = document.querySelectorAll(".drum").length;

for (let i = 0; i < drum; i++){
    let butn = document.querySelectorAll(".drum");
    butn[i].addEventListener("click", function () {
        
        let audiotype = this.textContent;
        makeSound(audiotype);
        buttonAnimation(audiotype);
    })
}

document.addEventListener("keydown", function(event){
    let keyPressed = event.key;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);
})


function makeSound(key) {
    switch(key) {
        case "w" : new Audio('sounds/tom-1.mp3').play();
            // let audio = new Audio('sounds/crash.mp3');
            // audio.play();
        break;
        case "a" : new Audio('sounds/tom-2.mp3').play();
        break;
        case "s" : new Audio('sounds/tom-3.mp3').play();
        break;
        case "d" : new Audio('sounds/tom-4.mp3').play();
        break;
        case "j" : new Audio('sounds/snare.mp3').play();
        break;
        case "k" : new Audio('sounds/kick-bass.mp3').play();
        break;
        case "l" : new Audio('sounds/crash.mp3').play();
        break;
        default: alert("click on  correct character");
        break;
    }
}

function buttonAnimation(key){
    let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}