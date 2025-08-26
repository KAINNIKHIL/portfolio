const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check saved preference
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

   
    lottie.loadAnimation({
      container: document.getElementById('dev-animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'Static/Developer.json'
    });


  
  const form = document.getElementById("contact-form");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop actual form submission for now

    // Show success message
    message.classList.remove("hidden");

    // Reset form fields
    form.reset();

    // Hide message after 3 seconds (optional)
    setTimeout(() => {
      message.classList.add("hidden");
    }, 3000);
  });

