export function initStickyHeader() {
  let lastScrollPosition = 0;

  window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    const nav = document.querySelector('.nav');

    if (currentScrollPosition > lastScrollPosition) {
      nav.classList.add('nav--is-hidden');
    } else {
      nav.classList.remove('nav--is-hidden');
    }

    lastScrollPosition = currentScrollPosition;
  });
}
