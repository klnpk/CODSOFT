// ==============================
// HOME PAGE SEARCH
// ==============================

const homeSearchBtn = document.getElementById("searchBtn");
const homeSearchInput = document.getElementById("searchInput");

if (
    homeSearchBtn &&
    homeSearchInput &&
    window.location.pathname.includes("index.html")
) {
    homeSearchBtn.addEventListener("click", function () {
        const keyword = homeSearchInput.value.trim();

        if (keyword !== "") {
            localStorage.setItem("jobSearch", keyword);
            window.location.href = "jobs.html";
        } else {
            alert("Please enter a job title.");
        }
    });
}

// ==============================
// LOGIN FORM
// ==============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Get registered user details
        const savedName = localStorage.getItem("userName");
        const savedEmail = localStorage.getItem("userEmail");
        const savedPassword = localStorage.getItem("userPassword");

        if (!savedEmail || !savedPassword) {
            alert("⚠️ You don't have an account yet. Please register first!");
        }
        else if (email === savedEmail && password === savedPassword) {
            alert(`✅ Welcome back, ${savedName}! Login Successful.`);
            loginForm.reset();
        }
        else {
            alert("❌ Invalid email or password. Please try again.");
        }
    });
}

// ==============================
// JOB APPLICATION FORM
// ==============================

const applicationForm = document.getElementById("applicationForm");

if (applicationForm) {
    applicationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("🎉 Your job application has been submitted successfully!");

        applicationForm.reset();
    });
}

// ==============================
// EMPLOYER JOB POST FORM
// ==============================

const jobPostForm = document.getElementById("jobPostForm");

if (jobPostForm) {
    jobPostForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("📢 Job posted successfully!");

        jobPostForm.reset();
    });
}

// ==============================
// CANDIDATE PROFILE SAVE
// ==============================

const profileForm = document.querySelector(".form-container form");

if (
    profileForm &&
    !document.getElementById("loginForm") &&
    !document.getElementById("applicationForm") &&
    !document.getElementById("jobPostForm")
) {
    profileForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("💾 Profile updated successfully!");

        profileForm.reset();
    });
}

// ==============================
// ACTIVE NAVIGATION LINK
// ==============================

const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
        link.classList.add("active");
    }
});

// ==============================
// BUTTON CLICK ANIMATION
// ==============================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        this.style.transform = "scale(0.96)";

        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 120);
    });
});

// ==============================
// SIMPLE PAGE LOAD EFFECT
// ==============================

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// ==============================
// DEMO EMAIL NOTIFICATION
// ==============================

function showNotification(message) {
    const notification = document.createElement("div");

    notification.innerText = message;
    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.right = "20px";
    notification.style.background = "#2563eb";
    notification.style.color = "#fff";
    notification.style.padding = "15px 20px";
    notification.style.borderRadius = "10px";
    notification.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    notification.style.zIndex = "9999";

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Example demo notification after successful application
if (applicationForm) {
    applicationForm.addEventListener("submit", function () {
        setTimeout(() => {
            showNotification("📧 Email notification sent successfully!");
        }, 500);
    });
}

// ==============================
// CONSOLE MESSAGE
// ==============================

console.log("🚀 Welcome to JobConnect - Job Board Demo Project");
console.log("Built with HTML, CSS & JavaScript.");

// ==============================
// LOGIN / REGISTER TOGGLE
// ==============================
    

const loginFormElement = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

// Show Register Form
if (showRegister) {
    showRegister.addEventListener("click", function (e) {
        e.preventDefault();
        loginFormElement.style.display = "none";
        registerForm.style.display = "block";
    });
}

// Show Login Form
if (showLogin) {
    showLogin.addEventListener("click", function (e) {
        e.preventDefault();
        registerForm.style.display = "none";
        loginFormElement.style.display = "block";
    });
}

// ==============================
// REGISTER FORM
// ==============================

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("regName").value;
        const email = document.getElementById("regEmail").value;
        const password = document.getElementById("regPassword").value;

        // Save user details
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        alert("🎉 Registration Successful! Now you can log in.");

        registerForm.reset();
        registerForm.style.display = "none";
        loginFormElement.style.display = "block";
    });
}
// ==============================
// JOB SEARCH FUNCTION
// ==============================

// ==============================
// JOB SEARCH FUNCTION
// ==============================

const searchButton = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

function searchJobs() {
    if (!searchInput) return;

    const value = searchInput.value.trim().toLowerCase();

    // Home page -> Go to jobs page
    if (
        window.location.pathname.includes("index.html") ||
        window.location.pathname.endsWith("/")
    ) {
        localStorage.setItem("jobSearch", value);
        window.location.href = "jobs.html";
        return;
    }

    // Jobs page -> Find and scroll
    const jobs = {
        "frontend developer": "frontend-developer",
        "python full stack developer": "python-full-stack-developer",
        "ui ux designer": "ui-ux-designer",
        "data analyst": "data-analyst",
        "java developer": "java-developer",
        "digital marketing executive": "digital-marketing-executive",
        "react developer": "react-developer",
        "software testing engineer": "software-testing-engineer"
    };

    if (jobs[value]) {
        const target = document.getElementById(jobs[value]);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            target.style.border = "3px solid #2563eb";

            setTimeout(() => {
                target.style.border = "";
            }, 2000);
        }
    } else {
        alert("❌ No matching job found.");
    }
}

// Button click and Enter key
if (searchButton && searchInput) {
    searchButton.addEventListener("click", searchJobs);

    searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            searchJobs();
        }
    });
}

// Auto-search after coming from Home page
window.addEventListener("load", function () {
    if (window.location.pathname.includes("jobs.html")) {
        const savedSearch = localStorage.getItem("jobSearch");

        if (savedSearch && searchInput) {
            searchInput.value = savedSearch;

            setTimeout(() => {
                searchJobs();
            }, 300);

            localStorage.removeItem("jobSearch");
        }
    }
});
