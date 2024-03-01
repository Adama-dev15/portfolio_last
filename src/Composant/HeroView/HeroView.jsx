import React, { useEffect } from "react";
import Typed from "typed.js"; // Importation de la bibliothèque Typed.js

const HeroView = () => {
  useEffect(() => {
    const typed = document.querySelector(".typed");
    if (typed) {
      let typed_strings = typed.getAttribute("data-typed-items");
      typed_strings = typed_strings.split(",");
      new Typed(".typed", {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }
  }, []); // Utilisation d'un effet pour initialiser Typed.js une fois que le composant est monté

  return (
    <div>
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container">
          <h1>Alex Smith</h1>
          <p>
            I'm{" "}
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            ></span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroView;
