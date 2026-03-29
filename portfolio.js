//Set dark-light mode
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  toggleBtn.textContent = "🌙";
} else {
  toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    toggleBtn.textContent = "🌙"; 
    localStorage.setItem("theme", "light");
  } else {
    toggleBtn.textContent = "☀️"; 
    localStorage.setItem("theme", "dark");
  }
});


const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-links");

    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    //Set active links
    
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        if (pageYOffset >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      navLinks.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href").includes(current)) {
          a.classList.add("active");
        }
      });
    });

   //For lottie animation
    lottie.loadAnimation({
      container: document.getElementById('dev-animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'Static/Developer.json'
    });

// Initialize EmailJS
emailjs.init("OVG9R3e_ugHDqE16g"); 

// For contact form with EmailJS
const form = document.getElementById("contact-form");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_8b2s3pe",
    "template_kz47ra5",
    this
  )
  .then(() => {
    message.classList.remove("hidden");
    form.reset();

    setTimeout(() => {
      message.classList.add("hidden");
    }, 3000);
  })
  .catch((error) => {
    alert("Something went wrong. Try again.");
    console.log(error);
  });
});

const navAnchors = document.querySelectorAll("#nav-links a");

navAnchors.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navMenu.classList.remove("active");
    }
  });
});