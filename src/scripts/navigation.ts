export const initNavigation = () => {
  const header = document.querySelector<HTMLElement>('[data-site-header]');
  const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');

  const closeMenu = (returnFocus = true) => {
    if (!menu || !toggle) return;
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
    document.body.classList.remove('overflow-hidden');
    if (returnFocus) toggle.focus();
  };

  toggle?.addEventListener('click', () => {
    if (!menu) return;
    if (!menu.hidden) {
      closeMenu();
      return;
    }
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation menu');
    document.body.classList.add('overflow-hidden');
    menu.querySelector<HTMLAnchorElement>('a')?.focus();
  });
  document.querySelector('[data-menu-close]')?.addEventListener('click', () => closeMenu());
  document.querySelectorAll('[data-mobile-link]').forEach((link) => {
    link.addEventListener('click', () => closeMenu(false));
  });

  const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY >= 30);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  const navLinks = document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]');
  const observer = new IntersectionObserver((entries) => {
    const visibleSection = entries.find((entry) => entry.isIntersecting);
    if (!visibleSection) return;
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.hash === `#${visibleSection.target.id}`);
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  document.querySelectorAll<HTMLElement>('main section[id]').forEach((section) => observer.observe(section));

  return { closeMenu };
};
