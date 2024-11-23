var noofdrumbutton = document.querySelectorAll(".drum").length;

for ( var i = 0; i < noofdrumbutton ; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var whichbuttongotclicked= this.innerHTML;
        makeSound(whichbuttongotclicked);
        buttonAnimation(whichbuttongotclicked);
        
    });
    }
     document.addEventListener("keypress", function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    });
    function makeSound(key){
        switch(key) {
            case "w" :
                var dsound = new Audio("sounds/tom-1.mp3");
                dsound.play();
                break;
            case "a" :
                var dsound = new Audio("sounds/tom-2.mp3");
                dsound.play();
                break;
            case "s" :
                var dsound = new Audio("sounds/tom-3.mp3");
                dsound.play();
                break;
            case "d" :
                var dsound = new Audio("sounds/tom-4.mp3");
                dsound.play();
                break;
            case "j" :
                var dsound = new Audio("sounds/snare.mp3");
                dsound.play();
                break;
            case "k" :
                var dsound = new Audio("sounds/crash.mp3");
                dsound.play();
                break;
            case "l" :
                var dsound = new Audio("sounds/kick-bass.mp3");
                dsound.play();
                break;
            default : console.log(whichbuttongotclicked);
        }
    }
    function buttonAnimation(currentkey){
        var activeButton=document.querySelector("." +currentkey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100);
    }
