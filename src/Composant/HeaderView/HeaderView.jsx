import React, { useEffect } from "react";

const HeaderView = () => {
  useEffect(() => {
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    const body = document.querySelector("body");

    const handleMobileNavToggle = () => {
      body.classList.toggle("mobile-nav-active");
      mobileNavToggle.classList.toggle("bi-list");
      mobileNavToggle.classList.toggle("bi-x");
    };

    const handleNavbarLinksActiveState = () => {
      const navbarlinks = document.querySelectorAll("#navbar .scrollto");
      let position = window.pageYOffset + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = document.querySelector(navbarlink.hash);
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

    const handleScrollTo = (el) => {
      let elementPos = document.querySelector(el).offsetTop;
      window.scrollTo({
        top: elementPos,
        behavior: "smooth",
      });
    };

    const handleBackToTopButton = () => {
      const backtotop = document.querySelector(".back-to-top");
      if (backtotop) {
        if (window.pageYOffset > 100) {
          backtotop.classList.add("active");
        } else {
          backtotop.classList.remove("active");
        }
      }
    };

    if (mobileNavToggle) {
      mobileNavToggle.addEventListener("click", handleMobileNavToggle);
    }

    document.addEventListener("scroll", handleNavbarLinksActiveState);
    document.querySelectorAll(".scrollto").forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        if (document.querySelector(this.hash)) {
          handleScrollTo(this.hash);
        }
      });
    });

    window.addEventListener("load", () => {
      if (
        window.location.hash &&
        document.querySelector(window.location.hash)
      ) {
        handleScrollTo(window.location.hash);
      }
    });

    handleBackToTopButton();
    document.addEventListener("scroll", handleBackToTopButton);

    return () => {
      if (mobileNavToggle) {
        mobileNavToggle.removeEventListener("click", handleMobileNavToggle);
      }
      document.removeEventListener("scroll", handleNavbarLinksActiveState);
      document.querySelectorAll(".scrollto").forEach((link) => {
        link.removeEventListener("click", function (e) {
          e.preventDefault();
          if (document.querySelector(this.hash)) {
            handleScrollTo(this.hash);
          }
        });
      });
      window.removeEventListener("load", () => {
        if (
          window.location.hash &&
          document.querySelector(window.location.hash)
        ) {
          handleScrollTo(window.location.hash);
        }
      });
      document.removeEventListener("scroll", handleBackToTopButton);
    };
  }, []);

  return (
    <div>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img
              src="assets/img/profile-img.jpg"
              alt=""
              className="img-fluid rounded-circle"
            />
            <h1 className="text-light">
              <a href="index.html">Alex Smith</a>
            </h1>
            <div className="social-links mt-3 text-center">
              <a href="a" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="a" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="a" className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="a" className="google-plus">
                <i className="bx bxl-skype"></i>
              </a>
              <a href="a" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="#hero" className="nav-link scrollto active">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#services" className="nav-link scrollto">
                  <i className="bx bx-server"></i> <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link scrollto">
                  <i className="bx bx-envelope"></i> <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HeaderView;
