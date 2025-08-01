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

      <div className="lottie-background">
        <Lottie animationData={aboutAnimation} loop={true} />
      </div>

      <div className="about-container fade-in">
        <h2 className="about-title">About UI Kart</h2>

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
                <strong>Established on 5th May 2025</strong>, UI Kart started as
                a small workshop crafting premium leather bags in the heart of
                Kolkata.
              </li>
              <li>
                In record time, we expanded across India, launched our{" "}
                <strong>online storefront</strong>, and became a trusted partner
                for <strong>corporate gifting and B2B solutions</strong>.
              </li>
              <li>
                Today, UI Kart stands as a one-stop destination for high-quality
                leather and non-leather goods—serving both retail customers and
                bulk clients with unmatched craftsmanship.
              </li>
            </ul>
          </Tilt>

          <Tilt className="info-card fade-in">
            <h3 className="info-title">🌍 Global Outlook</h3>
            <p className="info-text">
              Backed by a strong domestic presence, UI Kart is now stepping onto
              the global stage—shipping to multiple countries and partnering
              with private labels for international distribution. We don't just
              deliver products—we deliver experiences, built on trust, style,
              and consistency.
            </p>
          </Tilt>

          <Tilt className="info-card fade-in">
            <h3 className="info-title">🛒 Coming Soon</h3>
            <p className="info-text">
              We’re excited to announce that our official{" "}
              <strong>e-commerce website</strong> is launching very soon!
              <br />
              <br />
              Get ready to explore our premium collection of handcrafted leather
              and non-leather goods—crafted with passion, delivered with care.
              UI Kart is bringing timeless elegance right to your doorstep.
              <br />
              <br />
              <em>Stay tuned for a seamless shopping experience!</em>
            </p>
          </Tilt>
        </div>
      </div>
    </section>
  );
};
