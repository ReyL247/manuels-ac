// Manuel's AC & Cooling — main.js

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile nav toggle ---
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // --- Sticky header shadow on scroll ---
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 2px 20px rgba(0,0,0,.25)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  // --- Contact form submission (demo — replace with real backend/formspree) ---
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // TODO: Replace this block with a real form submission (Formspree, EmailJS, etc.)
      // Example with Formspree:
      // fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   body: new FormData(form),
      //   headers: { Accept: 'application/json' }
      // }).then(res => { if (res.ok) showSuccess(); });

      // For now, simulate success after short delay
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      btn.disabled = true;

      setTimeout(() => {
        form.style.display = 'none';
        if (formSuccess) formSuccess.style.display = 'block';
      }, 1000);
    });
  }

  // --- Smooth anchor scrolling ---
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      const hash = href.includes('#') ? '#' + href.split('#')[1] : null;
      if (!hash) return;

      // Only scroll if we're on the same page
      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        const offset = 80; // header height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // --- Simple scroll-in animation for cards ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .service-detail-card, .why-list li').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .4s ease, transform .4s ease';
    observer.observe(el);
  });

});
