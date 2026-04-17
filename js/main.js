// Manoel's AC & Cooling - main.js

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile nav toggle ---
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', navLinks.classList.contains('open') ? 'true' : 'false');
    });

    // Close nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Sticky header shadow on scroll ---
  const header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,.25)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }

  // --- Contact form submission fallback via email draft ---
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const data = new FormData(form);
      const firstName = (data.get('fname') || '').toString().trim();
      const lastName = (data.get('lname') || '').toString().trim();
      const fullName = `${firstName} ${lastName}`.trim();
      const phone = (data.get('phone') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const service = (data.get('service') || '').toString().trim();
      const preferred = (data.get('preferred') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Opening Email...';
      btn.disabled = true;

      const subject = `Service Request: ${service || 'HVAC Service'} - ${fullName || 'Website Lead'}`;
      const bodyLines = [
        'New service request from the website:',
        '',
        `Name: ${fullName || 'Not provided'}`,
        `Phone: ${phone || 'Not provided'}`,
        `Email: ${email || 'Not provided'}`,
        `Service Needed: ${service || 'Not specified'}`,
        `Preferred Time: ${preferred || 'Not specified'}`,
        '',
        'Details:',
        message || 'No additional details provided.'
      ];

      window.location.href = `mailto:manuel@manuelsac.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

      setTimeout(() => {
        form.style.display = 'none';
        if (formSuccess) formSuccess.style.display = 'block';
      }, 350);
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
        const offset = 80;
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
