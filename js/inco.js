const navMenu = document.querySelector(".nav");
const toggleMenu = document.querySelector(".header__toggle");
const closeMenu = document.querySelector(".header__close");
const navLinks = document.querySelectorAll(".nav__list a");
const activePage = window.location.pathname;


// Show.
toggleMenu.addEventListener("click", () => {
    navMenu.classList.toggle("show");
})

// Hidden.
closeMenu.addEventListener("click", () => {
    navMenu.classList.remove("show");
})


navLinks.forEach(link => {
    if(link.href.includes(`${activePage}`)) {
        link.classList.add("active");
    };
});


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


