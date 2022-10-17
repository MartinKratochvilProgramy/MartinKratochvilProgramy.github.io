var prevScrollpos = window.pageYOffset;
const about = document.getElementById("about-div");
const abletonImgDiv = document.getElementById("ableton-img-div");

window.onscroll = function() {
    var yOffset = window.pageYOffset; 
    var currentScrollPos = yOffset;
    if (yOffset > 300) {
        // bellow header and about menu
        about.style.position = "fixed";

        if (prevScrollpos >= currentScrollPos) {
            // going up
            about.style.top = "0";
        } else {
          //going down
          about.style.top = "-64px";
        }
    } else if (yOffset <= 300 && yOffset > 71) {
        // inside header menu
        abletonImgDiv.style.marginTop = "64px";
        about.style.position = "fixed";
        about.style.top = "0";
    } else {
        // inside navbar
        abletonImgDiv.style.marginTop = "0px";
        about.style.position = "relative";
    }
  prevScrollpos = currentScrollPos;
  
} 