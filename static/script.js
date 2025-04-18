// Dark mode toggle
const toggleBtn = document.getElementById('toggle-mode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent =
    document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Contact form submission
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  msg.textContent = 'Thank you! Your message has been received.';
  form.reset();
});
