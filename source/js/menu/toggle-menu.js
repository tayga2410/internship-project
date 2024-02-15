function toggleMenu() {
  const nav = document.querySelector('.nav');
  const navList = document.querySelector('.nav__list');
  const burgerButton = document.querySelector('.nav__burger-menu');
  const burgerButtonText = document.querySelector('.nav__burger-menu-text');
  const iconClosed = burgerButton.querySelector('[data-menu="icon-closed"]');
  const iconOpened = burgerButton.querySelector('[data-menu="icon-opened"]');
  const navLinks = document.querySelectorAll('.nav__link');
  const logo = document.querySelector('.nav__logo');
  const overlay = document.querySelector('.overlay');

  function toggleClick(event) {
    const isOpen = navList.classList.contains('nav__list--is-opened');

    if (isOpen && !navList.contains(event.target) && !burgerButton.contains(event.target)) {
      closeMenu();
    }
  }

  function closeMenu() {
    iconClosed.style.display = 'block';
    iconOpened.style.display = 'none';
    burgerButton.classList.remove('nav__burger-menu--is-opened');
    burgerButtonText.classList.remove('nav__burger-menu-text--is-opened');

    navList.classList.remove('nav__list--is-opened');
    nav.classList.remove('nav--is-opened');
    nav.classList.add('nav--is-closed');

    navLinks.forEach((link) => {
      link.classList.add('nav__link--is-closed');
    });

    logo.classList.remove('nav__logo--is-opened');
    overlay.style.display = 'none';
    document.removeEventListener('click', toggleClick);
  }

  burgerButton.addEventListener('click', (event) => {
    event.stopPropagation();
    navList.classList.toggle('nav__list--is-closed');
    const isOpen = navList.classList.toggle('nav__list--is-opened');
    iconClosed.style.display = isOpen ? 'none' : 'block';
    iconOpened.style.display = isOpen ? 'block' : 'none';
    burgerButton.classList.toggle('nav__burger-menu--is-opened', isOpen);
    burgerButtonText.classList.toggle('nav__burger-menu-text--is-opened', isOpen);

    navLinks.forEach((link) => {
      link.classList.toggle('nav__link--is-closed', !isOpen);
    });

    logo.classList.toggle('nav__logo--is-opened', isOpen);

    if (isOpen) {
      document.addEventListener('click', toggleClick);
      const firstNavLink = navList.querySelector('.nav__link');
      if (firstNavLink) {
        firstNavLink.focus();
      }
      overlay.style.display = 'block';
      nav.classList.remove('nav--is-closed');
      nav.classList.add('nav--is-opened');
    } else {
      overlay.style.display = 'none';
      nav.classList.remove('nav--is-opened');
      nav.classList.add('nav--is-closed');
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.stopPropagation();
    });
  });
}

export default toggleMenu;
