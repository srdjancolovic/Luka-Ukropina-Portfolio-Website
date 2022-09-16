//Hamburger menu vars
const menuTogglerBtn = document.querySelector('.menu-toggler');
const menuTogglerLine1 = document.querySelector('.menu-toggler__line-1');
const menuTogglerLine2 = document.querySelector('.menu-toggler__line-2');
const menuTogglerLine3 = document.querySelector('.menu-toggler__line-3');

//Nav links and nav menu
const navMenu = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.menu__link');

//Sticky navbar
const navbar = document.querySelector('.sticky-nav');

//Html
const html = document.querySelector('html');

//Images preview toggle buttons/Card controls
const previewImagesInfoBtn = document.querySelectorAll(
  '.retouch__card-controls-toggler-mobile'
);

const toggleImgBtn = document.querySelectorAll('.retouch__img-toggler');
const cardControls = document.querySelector('.retouch__card-controls');

//Preloader
const preloader = document.querySelector('.preloader');

const togglerFn = () => {
  menuTogglerBtn.classList.toggle('menu-toggler-close');
  menuTogglerLine1.classList.toggle('menu-toggler__line-1-close');
  menuTogglerLine2.classList.toggle('menu-toggler__line-2-close');
  menuTogglerLine3.classList.toggle('menu-toggler__line-3-close');
  navMenu.classList.toggle('hide-menu');

  if (navbar.classList.contains('sticky-nav-bg')) {
    navbar.classList.toggle('sticky-nav-transparent');
  }
};

//Check if we are on retouch page to solve bug with videos (uncomment if client wants videos back)

// if (window.location.href.indexOf('retouch') != -1) {
//   //Retouch videos
//   const videos = document.querySelectorAll('.retouch__video');
//   const videosToggleButton = document.querySelector(
//     '.retouch__video-toggle-btn'
//   );
//   //Toggle retouch videos div
//   videosToggleButton.addEventListener('click', () => {
//     videos.forEach((video) => {
//       video.classList.toggle('retouch__show-videos');
//       if (video.classList.contains('retouch__show-videos')) {
//         videosToggleButton.textContent = 'Hide Videos';
//       } else {
//         videosToggleButton.textContent = 'Show Videos';
//       }
//     });
//   });
// }
//On Load

window.addEventListener('load', () => {
  //Remove preloader on page load
  gsap.to('.preloader', { opacity: 0, zIndex: -1000 });
  const timeline = gsap.timeline({ defaults: { duration: 0.7 } });
  timeline
    .from('.menu-toggler', { x: 100, opacity: 0 })
    .from('.sticky-nav__logo-link', {
      x: -30,
      opacity: 0,
    })
    .from('.homepage__heading', { y: 50, opacity: 0 })
    .from('.homepage__social-icons', { opacity: 0 });
});

//Animations
//Callback function for target
const callback = function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.timeline.play();
    }
  });
};

//Intersection observer
const observer = new IntersectionObserver(callback, {
  root: null,
  threshold: 0.5,
});

///SlideInUp Animation

const slideInUpAnim = document.querySelectorAll('.slideInUp');
slideInUpAnim.forEach(function (item) {
  const action = gsap
    .timeline({ paused: true })
    .from(item, { y: 40, opacity: 0, duration: 0.6, delay: 0.5 });

  item.timeline = action;
});

Array.prototype.forEach.call(slideInUpAnim, (el) => {
  observer.observe(el);
});

///SlideInLeft
const slideInLeftAnim = document.querySelectorAll('.slideInLeft');
slideInLeftAnim.forEach(function (item) {
  const action = gsap
    .timeline({ paused: true })
    .from(item, { x: -40, opacity: 0, duration: 0.6, delay: 0.5 });
  item.timeline = action;
});
Array.prototype.forEach.call(slideInLeftAnim, (el) => {
  observer.observe(el);
});

///SlideInRight
const slideInRight = document.querySelectorAll('.slideInRight');
slideInRight.forEach(function (item) {
  const action = gsap
    .timeline({ paused: true })
    .from(item, { x: 40, opacity: 0, duration: 0.6, delay: 0.5 });
  item.timeline = action;
});
Array.prototype.forEach.call(slideInRight, (el) => {
  observer.observe(el);
});

const scaleIn = document.querySelectorAll('.scaleIn');
scaleIn.forEach(function (item) {
  const action = gsap
    .timeline({ paused: true })
    .from(item, { opacity: 0, duration: 0.8, delay: 0.5, scale: 0.8 });
  item.timeline = action;
});
Array.prototype.forEach.call(scaleIn, (el) => {
  observer.observe(el);
});

//Open/close menu
menuTogglerBtn.addEventListener('click', togglerFn);

//Click on nav links to toggle menu
navLinks.forEach((link) => {
  link.addEventListener('click', togglerFn);
});

html.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu')) {
    togglerFn();
  }
});

//Toggle image controls for retouch
previewImagesInfoBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.target
      .closest('div')
      .parentElement.children[2].classList.toggle(
        'retouch__card-controls-show'
      );

    btn.classList.toggle('retouch__card-controls-toggler-mobile-open');
  });
});

//Toggle edited image
toggleImgBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const beforeImg = e.target.closest('div').parentElement.children[1];
    beforeImg.classList.toggle('retouch__card--before-img');

    if (!beforeImg.classList.contains('retouch__card--before-img')) {
      btn.textContent = 'After';
    } else {
      btn.textContent = 'Before';
    }
  });
});

//Scroll function for sticky nav
window.onscroll = () => {
  const scrollFromTop = document.documentElement.scrollTop;

  if (scrollFromTop > 80) {
    navbar.classList.add('sticky-nav-bg');
  } else {
    navbar.classList.remove('sticky-nav-bg');
  }
};
// Smooth scroll for Safari browsers
const ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') != -1) {
  if (ua.indexOf('chrome') > -1) {
    $(' .go-to-top, .menu__link, .top-btn').on('click', function (e) {
      if (this.hash !== '') {
        const hash = this.hash;

        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800
        );
      }
    });
  } else {
    $(' .go-to-top, .menu__link, .top-btn').on('click', function (e) {
      if (this.hash !== '') {
        const hash = this.hash;
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800
        );
      }
    });
  }
}



//Lightbox options for specific pages
if( document.URL.includes("photography") || document.URL.includes("retouch")){
lightbox.option({
  resizeDuration: 400,
  wrapAround: true,
});
}
