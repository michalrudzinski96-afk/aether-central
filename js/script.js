// Smooth scroll
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact Form (EmailJS placeholder)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const status = document.getElementById('formStatus');
  status.textContent = "Sending...";
  status.style.color = "#a0b0ff";

  // TODO: Configure EmailJS here
  status.textContent = "✅ Message sent! We will contact you soon.";
  status.style.color = "#22d3ee";
  document.getElementById('contactForm').reset();
});