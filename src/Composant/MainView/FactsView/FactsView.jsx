import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FactsView = () => {
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const factsSection = document.getElementById("facts");
      if (!factsSection) return;

      const factsSectionTop = factsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (factsSectionTop < windowHeight * 0.75) {
        setStartCounting(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (startCounting) {
      const counters = document.querySelectorAll(".purecounter");

      const animateCounters = () => {
        counters.forEach((counter) => {
          const start = +counter.getAttribute("data-purecounter-start");
          const end = +counter.getAttribute("data-purecounter-end");
          const duration =
            +counter.getAttribute("data-purecounter-duration") * 1000;

          let startTime;

          const updateCounter = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const progress = timestamp - startTime;
            const value =
              Math.floor((end - start) * (progress / duration)) + start;

            counter.textContent = value;

            if (progress < duration) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.textContent = end;
            }
          };

          requestAnimationFrame(updateCounter);
        });
      };

      animateCounters();
    }
  }, [startCounting]);

  return (
    <div>
      <section id="facts" className="facts">
        <div className="container">
          <div className="section-title">
            <h2>Facts</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="row no-gutters">
            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box" data-aos="fade-up">
                <i className="bi bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Happy Clients</strong> consequuntur quae
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box" data-aos="fade-up">
                <i className="bi bi-journal-richtext"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Projects</strong> adipisci atque cum quia aut
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box" data-aos="fade-up">
                <i className="bi bi-headset"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1453"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Hours Of Support</strong> aut commodi quaerat
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
              <div className="count-box" data-aos="fade-up">
                <i className="bi bi-people"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="32"
                  data-purecounter-duration="1"
                  className="purecounter"
                ></span>
                <p>
                  <strong>Hard Workers</strong> rerum asperiores dolor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FactsView;
