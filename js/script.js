// Change tabs in about me
let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName){
    for(let tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(let tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    document.getElementById(tabName).classList.add("active-tab");
}

document.addEventListener('click', function(event) {
    event.target.classList.add("active-link");
});

// Open and close menu on mobile
let sideMenu = document.getElementById("side-menu");

function openMenu(){
    sideMenu.style.right = "0";
}
function closeMenu(){
    sideMenu.style.right = "-170px";
}

// Auto typing effect
window.onload = function() { // let the script load on opening the website
    let typed = new Typed(".auto-type", {
        strings: ["UX/UI Designer", "Front End Developer"],
        typeSpeed: 90,
        backSpeed: 40,
        loop: true
    });

    // Animation on Scroll
    AOS.init({
        offset: 280, // offset (in px) from the original trigger point
        delay: 40, // values from 0 to 3000, with step 50ms
        duration: 800 // values from 0 to 3000, with step 50ms
    });
}

// contact form to google sheet
const msg = document.getElementById("msg");

const scriptURL = 'https://script.google.com/macros/s/AKfycbyvp2tADIQOrn65eEqISxvhmv1TGOqjJiROov4p-6BW3obhg1yxZugg2a3n_Jn0QRy9/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    const inputEmail = document.getElementById("email");

    let atpos = inputEmail.value.indexOf("@");
    let dotpos = inputEmail.value.lastIndexOf(".");
    // inform that user has clicked submit
    msg.innerHTML = "Sending...";
    // fetch user input to google sheet link (scriptURL) after checking the condition
    // whether the input has @ and ., and @ has to be before .
    if (atpos > 0 && dotpos > atpos+1 && dotpos+2 < inputEmail.value.length) {
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function(){
                msg.innerHTML = ""
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
    } else {
        msg.setAttribute("style", "color:#ab2020;");
        msg.innerHTML = "Invalid email";
        setTimeout(function(){
            msg.setAttribute("style", "color:rgb(55, 131, 55);");
            msg.innerHTML = ""
        }, 4000);
    }
    
});

// Fill color for navbar on scroll
window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
    if (document.body.scrollTop > document.getElementById('header').clientHeight/4 
    || document.documentElement.scrollTop > document.getElementById('header').clientHeight/4) {
    
        document.getElementById("navbar").style.background = "#2f3251";
    } else {
   
        document.getElementById("navbar").style.background = "none";
    }
}