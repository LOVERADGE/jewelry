// Dynamic year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for reaching out! We'll reply soon.");
  this.reset();
});