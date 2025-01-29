// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Active link highlighting on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id");
      }
  });

  navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
      }
  });
});

// Handle form submission with redirect
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form"); // Select the form

  if (form) {
      form.addEventListener("submit", function (event) {
          event.preventDefault(); // Prevents default form submission
          const formData = new FormData(form);

          fetch(form.action, {
              method: form.method,
              body: formData,
              headers: { 'Accept': 'application/json' }
          })
          .then(response => {
              if (response.ok) {
                  // ✅ Redirect to the Thank You page
                  window.location.href = "https://thesanyaw.github.io/my-portfolio-site/thank-you.html";
              } else {
                  alert("Oops! Something went wrong. Please try again.");
              }
          })
          .catch(error => {
              console.error("Error:", error);
          });
      });
  }
});
