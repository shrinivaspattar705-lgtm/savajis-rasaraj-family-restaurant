const loader = document.getElementById('loader');
const progressBar = document.getElementById('progressBar');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const revealElements = document.querySelectorAll('.reveal');

window.addEventListener('load', () => {
  if (loader) {
    loader.classList.add('loaded');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 400);
  }
  revealOnScroll();
});

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = `${scrolled}%`;
  revealOnScroll();
});

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
  });
});

function revealOnScroll() {
  const triggerHeight = window.innerHeight * 0.88;
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerHeight) {
      el.classList.add('visible');
    }
  });
}

const instagramLinks = document.querySelectorAll('a[href*="instagram.com"]');
instagramLinks.forEach((link) => {
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});
