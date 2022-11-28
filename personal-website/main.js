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

// ********** SHOW NAME ON SCROLL **********
const nameEl = document.getElementById("name");
const nameElHeight = nameEl.offsetHeight;

// ********** SHOW ABOUT ON SCROLL **********
const aboutEl = document.getElementById("about");
const aboutElHeight = aboutEl.offsetHeight;

// ********** SHOW PROJECTS ON SCROLL **********
const projectsEl = document.getElementById("projects");
const projectsElHeight = projectsEl.offsetHeight;

var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= nameElHeight/4) {
      aboutEl.className = "about-shown";
    }

    if (y >=  nameElHeight * 6/8) {
      projectsEl.className = "projects-shown";
    }
};

window.addEventListener("scroll", myScrollFunc);


// ********** COPY TO CLIPBOARD **********
const email = document.getElementById("email");
const emailCopyIcon = document.getElementById("email-copy-icon");
const emailCopied = document.getElementById("email-copied");

emailCopyIcon.onclick = function() {
  document.execCommand("copy");
  emailCopied.classList.add('contact-copied-display')
  setTimeout(() => {
    emailCopied.classList.remove('contact-copied-display')
  }, 1500)
  navigator.clipboard.writeText(email.textContent)
}
