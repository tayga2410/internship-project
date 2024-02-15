import Swiper from 'swiper/bundle';

const loopEnabled = true;
const loopDisabled = false;

const heroSwiperLoop = loopEnabled;
const programsSwiperLoop = loopDisabled;
const newsSwiperLoop = loopDisabled;
const reviewsSwiperLoop = loopDisabled;

const heroSwiperOptions = {
  loop: heroSwiperLoop,
  autoHeight: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-slide-active .hero__pagination',
    clickable: true,
  },

  on: {
    slideChangeTransitionStart: function () {
      this.pagination.init();
      this.pagination.render();
      this.pagination.update();
    }
  },

  breakpoints: {
    1440: {
      allowTouchMove: false,
      slidesPerView: 1,
    },
    768: {
      allowTouchMove: true,
      slidesPerView: 1,
    },
    320: {
      allowTouchMove: true,
      slidesPerView: 1,
    },
  },
};

const programsSwiperOptions = {
  loop: programsSwiperLoop,
  navigation: {
    nextEl: '[data-swiper="programs"] [data-swiper="button-next"]',
    prevEl: '[data-swiper="programs"] [data-swiper="button-prev"]',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    dragSize: 392,
    draggable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      allowTouchMove: true,
      scrollbar: {
        dragSize: 324,
      },
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      allowTouchMove: false,
    },
  },
};

const newsSwiperOptions = {
  loop: newsSwiperLoop,
  navigation: {
    nextEl: '[data-swiper="news"] [data-swiper="button-next"]',
    prevEl: '[data-swiper="news"] [data-swiper="button-prev"]',
  },
  pagination: {
    el: '[data-swiper="news-pagination"]',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${ className }">${ index + 1 }</span>`;
    },
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 30,
      grid: {
        rows: 2,
      },
    },
    1440: {
      slidesPerView: 'auto',
      slidesPerGroup: 2,
      spaceBetween: 32,
    },
  },
};

const reviewsSwiperOptions = {
  loop: reviewsSwiperLoop,
  navigation: {
    nextEl: '[data-swiper="reviews"] [data-swiper="button-next"]',
    prevEl: '[data-swiper="reviews"] [data-swiper="button-prev"]',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: false,
    dragSize: 392,
    draggable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      scrollbar: {
        dragSize: 324,
      }
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 32,
    },
  },
};

function initSwiper(swiperInstance) {
  swiperInstance.init();
}

const heroSwiper = new Swiper('[data-swiper="hero"]', heroSwiperOptions);
const programsSwiper = new Swiper(
  '[data-swiper="programs"]',
  programsSwiperOptions
);
const newsSwiper = new Swiper('[data-swiper="news"]', newsSwiperOptions);
const reviewsSwiper = new Swiper(
  '[data-swiper="reviews"]',
  reviewsSwiperOptions
);

export { initSwiper, heroSwiper, programsSwiper, newsSwiper, reviewsSwiper };
