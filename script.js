// Scroll Reveal on every scroll
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

// Animate skill bars on scroll
function animateSkills() {
  let skills = document.querySelectorAll(".progress");
  skills.forEach(skill => {
    let targetWidth = skill.getAttribute("data-width");
    if (skill.getBoundingClientRect().top < window.innerHeight - 100) {
      skill.style.width = targetWidth;
    }
  });
}
window.addEventListener("scroll", animateSkills);



// Dark/Light Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Trigger initial reveal + skill
reveal();
animateSkills();