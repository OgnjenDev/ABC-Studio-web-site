// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetID = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      targetSection.focus({ preventScroll: true });
    }
  });
});

// Scroll to contact section on button click
document.getElementById('contactBtn').addEventListener('click', () => {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
  contactSection.focus({ preventScroll: true });
});

// Simple form validation and submission simulation
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', e => {
  e.preventDefault();
  formMessage.textContent = '';
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    formMessage.style.color = '#f56565'; // red
    formMessage.textContent = 'Please fill in all fields.';
    return;
  }
  // Simple email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formMessage.style.color = '#f56565';
    formMessage.textContent = 'Please enter a valid email address.';
    return;
  }

  // Simulate sending message (e.g. via API)
  formMessage.style.color = '#48bb78'; // green
  formMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
  form.reset();
});
