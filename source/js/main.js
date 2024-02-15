import toggleMenu from './menu/toggle-menu';
import toggleSubMenu from './menu/toggle-sub-menu';
import { initSwiper, heroSwiper, programsSwiper, newsSwiper, reviewsSwiper } from './swiper/init-swiper';
import { initAccordions } from './accordion/init-accordion';
import { Form } from './form/form';
import { CustomSelect } from './select/custom-select';
import { initModals } from './modals/init-modals';
import {initStickyHeader} from './menu/init-sticky-header';

window.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  toggleMenu();
  toggleSubMenu('.nav__link', '.nav__sub-link');


  window.addEventListener('load', () => {
    initSwiper(heroSwiper);
    initSwiper(programsSwiper);
    initSwiper(newsSwiper);
    initSwiper(reviewsSwiper);
    initAccordions();
    initModals();
    const form = new Form();
    form.init();
    window.form = form;
    const select = new CustomSelect();
    select.init();
  });
});
