// ********** HIDE NAVBAR ON SCROLL **********

var prevScrollpos = window.pageYOffset;
const navbarEl = document.getElementById("navbar")
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbarEl.style.top = "0";
  } else {
    navbarEl.style.top = `-${navbarEl.offsetHeight}px`;
  }
  prevScrollpos = currentScrollPos;
} 

// ********** SHOW ABOUT ON SCROLL **********
const aboutEl = document.getElementById("about");
const aboutElHeight = aboutEl.offsetHeight;

// ********** SHOW PROJECTS ON SCROLL **********
const projectsEl = document.getElementById("projects");
const projectsElHeight = projectsEl.offsetHeight;

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= aboutElHeight/2) {
      aboutEl.className = "about-shown";
    }

    if (y >=  window.innerHeight - aboutElHeight/2) {
      projectsEl.className = "projects-shown";
    }
};

window.addEventListener("scroll", myScrollFunc);