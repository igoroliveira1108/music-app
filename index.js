window.addEventListener("load", ()=> {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual")
    const color = [
       "#60d394",
       "#d36060",
       "#c060d3",
       "#d3d160",
       "#6860d3",
       "#60b2d3"
    ];

    // Lets get going with the sound here
    pads.forEach( (pad, index) => {
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0; // Reset the time when we click
            sounds[index].play();
        });
    });
});

