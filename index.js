// $('button').onClick(function() {
//     $(".paperImage").addClass('animated');
//     setTimeout(function() {
//       $(".paperImage").removeClass('animated');
//     }, 1500);
// });

// location.replace('https://www.albinauric.com/index.html');

var contentBodyElement = document.getElementById("content-body");
contentBodyElement.style.display = "visible";

var bodyElement = document.getElementById("body");
bodyElement.style.backgroundImage = "url('Pictures/paper.jpg')";

//Assigning/Removing class to navlink class
var navLinks = document.querySelectorAll(".nav-link-parent");
var count = 0;
var lastCount = -1;

setInterval(function() {
    if(count != lastCount) {
        navLinks[count].classList.add("animate__animated", "animate__backInUp"); //adding animation class to navlink
        navLinks[count].classList.remove("invisible"); //removing invisible class from navlink
        navLinks[count].style.setProperty('--animate-duration', '0.25s'); //adding animation duration to navlink
        lastCount = count; //setting lastCount to count
        navLinks[count].addEventListener('animationend', () => {
            navLinks[count].classList.remove("animate__animated", "animate__backInUp");
            count++;
        }
        );
    }
}
, 5);


var typing;

var i = 0;
var txt = 'Welcome to my Website :)';
var speed = 75;

let stateCheck = setInterval(() => {
    typing = document.getElementsByClassName("typing")[0];
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
      typeWriter();

    //   typing.classList.remove("preload");
    //   typing.classList.add("added");
    }
    // else{
    //     typing.classList.add("preload");
    // }
}, 100);  

//TYPING ANIMATION
//
function typeWriter() {
  if (i < txt.length) {
    typing.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
//
//END OF ANIMATION

var paper;

function PlayAnimationAbout() {
    LeavingAnimation();

    let timeout;
    timeout = setTimeout(FinishAnimAbout, 1000);
}

function PlayAnimationProjects() {
    LeavingAnimation();
    let timeout;
    timeout = setTimeout(FinishAnimProjects, 1000);
}

function PlayAnimationBlog() {
    LeavingAnimation();
    let timeout;
    timeout = setTimeout(FinishAnimBlog, 1000);
}

function FinishAnimAbout() {
    LeavingPage();

    paper.classList.remove('animated');
    location.href = "About/about.html";
}

function FinishAnimProjects() {
    LeavingPage();

    paper.classList.remove('animated');
    location.href = "Projects/projects.html";
}

function FinishAnimBlog() {
    LeavingPage();
    
    paper.classList.remove('animated');
    location.href = "Blog/blog.html";
}

function GetPaper() {
    return document.getElementsByClassName("paperImage")[0];
}

function LeavingAnimation() {
    paper = GetPaper();
    paper.classList.add('animated');
    // var navLinks = document.querySelectorAll(".nav-link-parent");

    // for(var i = 0; i < navLinks.length; i++){
    //     navLinks[i].classList.add("animate__animated", "animate__backOutUp");
    // }
}

function LeavingPage(){
    var contentBodyElement = document.getElementById("content-body");
    contentBodyElement.style.display = "none";

    var bodyElement = document.getElementById("body");
    bodyElement.style.backgroundImage = "url('Pictures/paper.jpg')";
}

setTimeout(function(){
    document.body.className="preload";
},3500);