(function () {
  //"use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Function to handle navbar links active state on scroll
   */
  const handleNavbarLinksActiveState = () => {
    const navbarlinks = select("#navbar .scrollto", true);
    let position = window.pageYOffset + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };

  /**
   * Function to handle scroll to an element with header offset
   */
  const handleScrollTo = (el) => {
    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: "smooth",
    });
  };

  /**
   * Function to handle back to top button
   */
  const handleBackToTopButton = () => {
    const backtotop = select(".back-to-top");
    if (backtotop) {
      if (window.pageYOffset > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    }
  };

  /**
   * Initialization function
   */
  const init = () => {
    // Handle navbar links active state on load and scroll
    handleNavbarLinksActiveState();
    onscroll(document, handleNavbarLinksActiveState);

    // Handle scroll to an element with header offset
    on(
      "click",
      ".scrollto",
      function (e) {
        if (select(this.hash)) {
          e.preventDefault();

          let body = select("body");
          if (body.classList.contains("mobile-nav-active")) {
            body.classList.remove("mobile-nav-active");
            let navbarToggle = select(".mobile-nav-toggle");
            navbarToggle.classList.toggle("bi-list");
            navbarToggle.classList.toggle("bi-x");
          }
          handleScrollTo(this.hash);
        }
      },
      true
    );

    // Handle scroll with offset on page load with hash links in the URL
    window.addEventListener("load", () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          handleScrollTo(window.location.hash);
        }
      }
    });

    // Handle mobile nav toggle
    on("click", ".mobile-nav-toggle", function (e) {
      select("body").classList.toggle("mobile-nav-active");
      this.classList.toggle("bi-list");
      this.classList.toggle("bi-x");
    });

    // Handle back to top button
    handleBackToTopButton();
    onscroll(document, handleBackToTopButton);
  };

  // Initialize the script when the DOM content is loaded
  document.addEventListener("DOMContentLoaded", init);
})();
