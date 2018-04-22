
document.addEventListener("DOMContentLoaded", function(){

    let resume = document.getElementById("resume");


    resume.addEventListener("mouseover", function( event ) {
        resume.className += " shake";

        setTimeout(function() {
            resume.classList.remove("pulse");
            resume.classList.remove("shake");
        }, 500);
    }, false);

});
