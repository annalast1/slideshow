// Set current slide
let currentSlide = 0;

// make prev + next buttons + dots functional
(function() {
    const prev = document.getElementById('prev');
    prev.addEventListener("click", () => {
        changeSlide('back');
    })
    const next = document.getElementById('next');
    next.addEventListener("click", () => { 
    changeSlide('forward');
    })
    const dots = document.getElementsByClassName('dot');
    const l = dots.length;
    for (let i = 0; i < l; i++) {
        dots[i].addEventListener("click", () => {
            const slides = document.getElementsByClassName('slide');
            slides[currentSlide].removeAttribute('data-active', slides[currentSlide]);
            currentSlide = i;
            displaySlide();
        })
    }      
})();

// function to move current slide value
function changeSlide(direction) {
    // remove image currently showing
    const slides = document.getElementsByClassName('slide');
    slides[currentSlide].removeAttribute('data-active', slides[currentSlide]);
    switch (direction) {
        case 'back':
            currentSlide -= 1;
            break;
        case 'forward': 
            currentSlide += 1;
            break;
        default:
            console.log("changeSlide error");
    }
    displaySlide();
};

function displaySlide() {
    const slides = document.getElementsByClassName('slide');
    const slidesLength = slides.length;
    // display next slide
    if (currentSlide >= slidesLength) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slidesLength - 1;
    }
    slides[currentSlide].setAttribute('data-active', slides[currentSlide]);
};

// move slide every 5 seconds
function automatic() {
    let slides = document.getElementsByClassName('slide');
    let l = slides.length;
    
    slides[currentSlide].removeAttribute('data-active', slides[currentSlide]);
    currentSlide++;  
    if (currentSlide >= l) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = l-1;
    }
    slides[currentSlide].setAttribute('data-active', slides[currentSlide]);
    
};

setInterval(automatic, 5000);  