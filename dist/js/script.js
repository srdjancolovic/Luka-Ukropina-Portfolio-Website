"use strict";var menuTogglerBtn=document.querySelector(".menu-toggler"),menuTogglerLine1=document.querySelector(".menu-toggler__line-1"),menuTogglerLine2=document.querySelector(".menu-toggler__line-2"),menuTogglerLine3=document.querySelector(".menu-toggler__line-3"),navMenu=document.querySelector(".menu"),navLinks=document.querySelectorAll(".menu__link"),navbar=document.querySelector(".sticky-nav"),html=document.querySelector("html"),previewImagesInfoBtn=document.querySelectorAll(".retouch__card-controls-toggler-mobile"),toggleImgBtn=document.querySelectorAll(".retouch__img-toggler"),cardControls=document.querySelector(".retouch__card-controls"),preloader=document.querySelector(".preloader"),togglerFn=function(){menuTogglerBtn.classList.toggle("menu-toggler-close"),menuTogglerLine1.classList.toggle("menu-toggler__line-1-close"),menuTogglerLine2.classList.toggle("menu-toggler__line-2-close"),menuTogglerLine3.classList.toggle("menu-toggler__line-3-close"),navMenu.classList.toggle("hide-menu"),navbar.classList.contains("sticky-nav-bg")&&navbar.classList.toggle("sticky-nav-transparent")},callback=(window.addEventListener("load",function(){gsap.to(".preloader",{opacity:0,zIndex:-1e3}),gsap.timeline({defaults:{duration:.7}}).from(".menu-toggler",{x:100,opacity:0}).from(".sticky-nav__logo-link",{x:-30,opacity:0}).from(".homepage__heading",{y:50,opacity:0}).from(".homepage__social-icons",{opacity:0})}),function(e){e.forEach(function(e){e.isIntersecting&&e.target.timeline.play()})}),observer=new IntersectionObserver(callback,{root:null,threshold:.5}),slideInUpAnim=document.querySelectorAll(".slideInUp"),slideInLeftAnim=(slideInUpAnim.forEach(function(e){var t=gsap.timeline({paused:!0}).from(e,{y:40,opacity:0,duration:.6,delay:.5});e.timeline=t}),Array.prototype.forEach.call(slideInUpAnim,function(e){observer.observe(e)}),document.querySelectorAll(".slideInLeft")),slideInRight=(slideInLeftAnim.forEach(function(e){var t=gsap.timeline({paused:!0}).from(e,{x:-40,opacity:0,duration:.6,delay:.5});e.timeline=t}),Array.prototype.forEach.call(slideInLeftAnim,function(e){observer.observe(e)}),document.querySelectorAll(".slideInRight")),scaleIn=(slideInRight.forEach(function(e){var t=gsap.timeline({paused:!0}).from(e,{x:40,opacity:0,duration:.6,delay:.5});e.timeline=t}),Array.prototype.forEach.call(slideInRight,function(e){observer.observe(e)}),document.querySelectorAll(".scaleIn")),ua=(scaleIn.forEach(function(e){var t=gsap.timeline({paused:!0}).from(e,{opacity:0,duration:.8,delay:.5,scale:.8});e.timeline=t}),Array.prototype.forEach.call(scaleIn,function(e){observer.observe(e)}),menuTogglerBtn.addEventListener("click",togglerFn),navLinks.forEach(function(e){e.addEventListener("click",togglerFn)}),html.addEventListener("click",function(e){e.target.classList.contains("menu")&&togglerFn()}),previewImagesInfoBtn.forEach(function(t){t.addEventListener("click",function(e){e.target.closest("div").parentElement.children[2].classList.toggle("retouch__card-controls-show"),t.classList.toggle("retouch__card-controls-toggler-mobile-open")})}),toggleImgBtn.forEach(function(t){t.addEventListener("click",function(e){e=e.target.closest("div").parentElement.children[1];e.classList.toggle("retouch__card--before-img"),e.classList.contains("retouch__card--before-img")?t.textContent="Before":t.textContent="After"})}),window.onscroll=function(){80<document.documentElement.scrollTop?navbar.classList.add("sticky-nav-bg"):navbar.classList.remove("sticky-nav-bg")},navigator.userAgent.toLowerCase());-1!=ua.indexOf("safari")&&(-1<ua.indexOf("chrome")?$(" .go-to-top, .menu__link, .top-btn").on("click",function(e){var t;""!==this.hash&&(t=this.hash,$("html, body").animate({scrollTop:$(t).offset().top},800))}):$(" .go-to-top, .menu__link, .top-btn").on("click",function(e){var t;""!==this.hash&&(t=this.hash,$("html, body").animate({scrollTop:$(t).offset().top},800))})),(document.URL.includes("photography")||document.URL.includes("retouch"))&&lightbox.option({resizeDuration:400,wrapAround:!0});
//# sourceMappingURL=script.js.map
