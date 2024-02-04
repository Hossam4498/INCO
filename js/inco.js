
const navMenu = document.querySelector(".nav");
const toggleMenu = document.querySelector(".header__toggle");
const closeMenu = document.querySelector(".header__close");


// Show.
toggleMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show");
})

// Hidden.
closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("show");
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    
    /*Remove menu mobile*/
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));





const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);

        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));