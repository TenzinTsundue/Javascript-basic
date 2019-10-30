window.addEventListener('load', () =>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual")
    const colors = [
        
    ]

    // Lets get going with the sound here

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].curretTime = 0;
            sounds[index].play();
        })
    });
});
