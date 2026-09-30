// ===============================
// AKRITI PORTFOLIO
// ===============================


// CURSOR GLOW

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;

});


// NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// MOBILE MENU

const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-open");

});


// CLOSE MOBILE MENU AFTER CLICK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-open");

    });

});


// SCROLL REVEAL

const revealElements = document.querySelectorAll(
    ".section, .project, .skill-category, .building-item"
);

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


// PHOTO PARALLAX

const heroVisual = document.querySelector(".hero-visual");

window.addEventListener("mousemove", (event) => {

    if (window.innerWidth < 850) return;

    const x = (window.innerWidth / 2 - event.clientX) / 50;
    const y = (window.innerHeight / 2 - event.clientY) / 50;

    heroVisual.style.transform =
        `translate(${x}px, ${y}px)`;

});


// SMOOTH PROJECT HOVER MOVEMENT

const projectVisuals =
    document.querySelectorAll(".project-visual");

projectVisuals.forEach(visual => {

    visual.addEventListener("mousemove", (event) => {

        const rect = visual.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width - 0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height - 0.5;

        visual.style.transform =
            `perspective(700px)
             rotateY(${x * 3}deg)
             rotateX(${y * -3}deg)`;

    });

    visual.addEventListener("mouseleave", () => {

        visual.style.transform = "";

    });

});


// PREVENT PLACEHOLDER LINKS FROM JUMPING

document.querySelectorAll('a[href="#"]').forEach(link => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        alert(
            "Add the real project link here when it is ready."
        );

    });

});


// CONSOLE MESSAGE

console.log(
    "%cHey 👋 Welcome to Akriti's portfolio.",
    "color:#a982ff;font-size:16px;font-weight:bold;"
);