/* Stallion Recovery 24/7 — shared site behaviour */
(function () {
  "use strict";

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  /* Cookie consent banner (PECR/GDPR) */
  var CONSENT_KEY = "stallionRecoveryCookieConsent";
  var banner = document.getElementById("cookie-banner");

  function getConsent() {
    try {
      return localStorage.getItem(CONSENT_KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (e) {
      /* localStorage unavailable — ignore, banner will just reappear */
    }
  }

  /* Photo carousel (revolving slideshow) */
  var carousel = document.querySelector("[data-carousel]");
  if (carousel) {
    var track = carousel.querySelector(".carousel-track");
    var slides = Array.prototype.slice.call(carousel.querySelectorAll(".carousel-slide"));
    var dots = Array.prototype.slice.call(carousel.querySelectorAll(".carousel-dots button"));
    var prevBtn = carousel.querySelector(".carousel-prev");
    var nextBtn = carousel.querySelector(".carousel-next");
    var current = 0;
    var timer = null;
    var AUTO_DELAY = 5000;

    function goTo(index) {
      current = (index + slides.length) % slides.length;
      track.style.transform = "translateX(-" + (current * 100) + "%)";
      dots.forEach(function (dot, i) {
        dot.setAttribute("aria-current", i === current ? "true" : "false");
      });
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() {
      stopAuto();
      timer = setInterval(next, AUTO_DELAY);
    }
    function stopAuto() {
      if (timer) clearInterval(timer);
    }

    /* If an image fails to load (no photo added yet), show a
       placeholder tile instead of a broken image icon. */
    slides.forEach(function (slide) {
      var img = slide.querySelector("img");
      if (img) {
        img.addEventListener("error", function () {
          slide.classList.add("img-missing");
        });
      }
    });

    if (nextBtn) nextBtn.addEventListener("click", function () { next(); startAuto(); });
    if (prevBtn) prevBtn.addEventListener("click", function () { prev(); startAuto(); });
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () { goTo(i); startAuto(); });
    });

    carousel.addEventListener("mouseenter", stopAuto);
    carousel.addEventListener("mouseleave", startAuto);
    carousel.addEventListener("focusin", stopAuto);
    carousel.addEventListener("focusout", startAuto);

    goTo(0);
    startAuto();
  }

  if (banner) {
    if (!getConsent()) {
      banner.classList.add("visible");
    }

    var acceptBtn = document.getElementById("cookie-accept");
    var declineBtn = document.getElementById("cookie-decline");

    if (acceptBtn) {
      acceptBtn.addEventListener("click", function () {
        setConsent("accepted");
        banner.classList.remove("visible");
      });
    }
    if (declineBtn) {
      declineBtn.addEventListener("click", function () {
        setConsent("declined");
        banner.classList.remove("visible");
      });
    }
  }
})();
