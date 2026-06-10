// ======================
// Countdown Timer
// ======================

// Set Event Date
const eventDate = new Date("December 31, 2026 09:00:00").getTime();

const timer = setInterval(() => {

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("timer").innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    if (distance < 0) {

        clearInterval(timer);

        document.getElementById("timer").innerHTML =
            "Hackathon Started!";
    }

}, 1000);


// ======================
// Back To Top Button
// ======================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ======================
// Registration Form
// ======================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert(
        "🎉 Registration Submitted Successfully!"
    );

    form.reset();

});


// ======================
// Navbar Shadow on Scroll
// ======================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.boxShadow =
            "0 4px 15px rgba(0,0,0,0.2)";

    } else {

        nav.style.boxShadow = "none";
    }

});


// ======================
// Card Hover Animation
// ======================

const cards = document.querySelectorAll(
    ".card, .prize-card"
);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0)";
    });

});