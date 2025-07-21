import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import Tilt from "react-parallax-tilt";
import aboutAnimation from "../../assets/about-lottie.json";
import { Starfield } from "../Starfield";
import "../../css/About.css";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el.querySelectorAll(".fade-in"),
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const productCategories = [
    "Leather Handbags",
    "Office Laptop Bags",
    "Wallets & Card Holders",
    "Travel & Duffel Bags",
    "Custom Corporate Gifting",
  ];

  const businessModes = [
    "Pan India Retail Sales",
    "Bulk Wholesale for Retailers",
    "White Label Manufacturing",
    "Custom Brand Printing",
    "Global Shipping Available",
  ];

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <Starfield />
      <div className="about-container fade-in">
        <h2 className="about-title">About UI Kart</h2>

        <div className="lottie-wrapper fade-in zoom-on-scroll">
          <Lottie animationData={aboutAnimation} loop={true} />
        </div>

        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable
          glareColor="#ffffff"
          className="fade-in"
        >
          <div className="about-card">
            <p className="about-description">
              UI Kart is a premium leather brand known for delivering
              top-quality handcrafted bags and accessories. We blend tradition
              with innovation to serve both retail customers and wholesale
              partners across India and beyond. Whether you're shopping for
              personal style or sourcing for business, UI Kart is your trusted
              leather destination.
            </p>

            <div className="skills-grid">
              <Tilt className="skills-section fade-in" tiltReverse>
                <h3 className="skills-title">Product Categories</h3>
                <div className="skills-tags">
                  {productCategories.map((item, key) => (
                    <span key={key} className="skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </Tilt>

              <Tilt className="skills-section fade-in" tiltReverse>
                <h3 className="skills-title">Wholesale & Retail</h3>
                <div className="skills-tags">
                  {businessModes.map((mode, key) => (
                    <span key={key} className="skill-tag">
                      {mode}
                    </span>
                  ))}
                </div>
              </Tilt>
            </div>

            <Tilt className="skills-section fade-in">
              <h3 className="skills-title">Our Mission</h3>
              <p className="about-description">
                To empower everyday professionals and style seekers with
                affordable, luxurious leather products made with precision,
                love, and responsibility.
              </p>
            </Tilt>

            <Tilt className="skills-section fade-in">
              <h3 className="skills-title">Our Vision</h3>
              <p className="about-description">
                To be India’s most trusted leather brand across wholesale,
                retail, and custom manufacturing—driven by quality, value, and
                innovation.
              </p>
            </Tilt>
          </div>
        </Tilt>

        <div className="info-grid">
          <Tilt className="info-card fade-in">
            <h3 className="info-title">🏢 Our Journey</h3>
            <ul className="info-list">
              <li>
                <strong>Founded in 2022</strong> — UI Kart began as a local
                workshop producing handcrafted leather bags in Kolkata.
              </li>
              <li>
                By 2024, we expanded into **pan-India retail**, launched our
                **e-commerce store**, and began working with **corporate gifting
                clients**.
              </li>
              <li>
                Today, we serve both individual customers and bulk wholesale
                buyers with world-class quality and service.
              </li>
            </ul>
          </Tilt>

          <Tilt className="info-card fade-in">
            <h3 className="info-title">🌍 Global Outlook</h3>
            <p className="info-text">
              With a strong presence in domestic markets, UI Kart now ships to
              multiple countries and works with private labels for global
              distribution. We're continuously growing and collaborating with
              partners worldwide.
            </p>
          </Tilt>
        </div>
      </div>
    </section>
  );
};
