function toggleSubMenu(linkSelector, subLinkSelector) {
  const links = document.querySelectorAll(linkSelector);
  const subLinks = document.querySelectorAll(subLinkSelector);

  function toggleSubList(subList) {
    if (subList) {
      subList.classList.toggle('nav__sub-list--is-closed');
      subList.classList.toggle('nav__sub-list--is-opened');
    }
  }

  function isOutsideSubMenu(target) {
    let isOutside = true;
    subLinks.forEach((subLink) => {
      const subList = subLink.closest('.nav__sub-list');
      if (subList && (subLink === target || subList.contains(target))) {
        isOutside = false;
      }
    });
    return isOutside;
  }

  function handleToggle(event, link, subList) {
    event.stopPropagation();
    const isOpened = !subList.classList.contains('nav__sub-list--is-opened');
    toggleSubList(subList, isOpened);
    link.classList.toggle('nav__link--is-opened', isOpened);
  }

  links.forEach((link) => {
    const subList = link.nextElementSibling;

    if (subList) {
      link.addEventListener('click', (event) => {
        handleToggle(event, link, subList);
      });

      link.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
          handleToggle(event, link, subList);
        }
      });
    }
  });

  subLinks.forEach((subLink) => {
    const subList = subLink.closest('.nav__sub-list');

    if (subList) {
      subLink.addEventListener('click', (event) => {
        event.stopPropagation();
        if (isOutsideSubMenu(event.target)) {
          const isOpened = !subList.classList.contains('nav__sub-list--is-opened');
          toggleSubList(subList, isOpened);
          subLink.classList.toggle('nav__sub-link--is-opened', isOpened);
        }
      });

      subLink.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
          event.stopPropagation();
          if (isOutsideSubMenu(event.target)) {
            const isOpened = !subList.classList.contains('nav__sub-list--is-opened');
            toggleSubList(subList, isOpened);
            subLink.classList.toggle('nav__sub-link--is-opened', isOpened);
          }
        }
      });
    }
  });

  document.addEventListener('click', (event) => {
    if (isOutsideSubMenu(event.target)) {
      subLinks.forEach((subLink) => {
        const subList = subLink.closest('.nav__sub-list');
        if (subList) {
          toggleSubList(subList, false);
          subLink.classList.remove('nav__sub-link--is-opened');
        }
      });
    }
  });
}

export default toggleSubMenu;
