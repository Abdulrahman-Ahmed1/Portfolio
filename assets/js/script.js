
window.addEventListener('scroll', function() {
    const scrollTopButton = document.querySelector('.scroll-to-top');
    if (window.pageYOffset > 300) { 
        scrollTopButton.classList.add('show');
    } else {
        scrollTopButton.classList.remove('show');
    }
});


const typingDelay = 100; 


function typeText(element, text, callback) {
    let index = 0;
    element.style.opacity = 1; 

    const interval = setInterval(() => {
        element.textContent = text.slice(0, index + 1); 
        index++;

        if (index === text.length) {
            clearInterval(interval);
            setTimeout(() => {
                callback(); 
            }, 1000); 
        }
    }, typingDelay);
}


function eraseText(element, callback) {
    let index = element.textContent.length;

    const interval = setInterval(() => {
        element.textContent = element.textContent.slice(0, index - 1); 
        index--;

        if (index < 0) {
            clearInterval(interval);
            element.style.opacity = 0; 
            callback(); 
        }
    }, typingDelay);
}


const text1 = "Abdulrahman Ahmed";
const text2 = "Front-End Developer";


function startTyping() {
    const text1Element = document.querySelector('.text1');
    const text2Element = document.querySelector('.text2');

    typeText(text1Element, text1, () => {
        eraseText(text1Element, () => {
            typeText(text2Element, text2, () => {
                eraseText(text2Element, startTyping); 
            });
        });
    });
}


document.addEventListener('DOMContentLoaded', function() {
    startTyping(); 

    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');

    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});
