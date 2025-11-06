  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.getElementById('primary-navigation');

  toggle?.addEventListener('click', () => {
      const isOpen = navbar.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu on link click (mobile)
  navLinks?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
          if (navbar.classList.contains('open')) {
              navbar.classList.remove('open');
              toggle.setAttribute('aria-expanded', 'false');
          }
      });
  });