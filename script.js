document.querySelector('.hamburger')?.addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('open');
});
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => e.isIntersecting && e.target.classList.add('show'));
}, { threshold: 0.15 });
document.querySelectorAll('.fade').forEach((el) => io.observe(el));
document.querySelector('form.quote')?.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.innerHTML = '<p><strong>Thanks! We\'ll call you back within one business day.</strong></p>';
});
