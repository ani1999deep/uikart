import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import lottie from "lottie-web";
import leatherShowcase from "../../assets/leather-showcase.json";
import "../../css/Home.css";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const lottieRef = useRef(null);

  // Scroll animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(contentRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power4.out",
      })
        .from(".home-title", { x: -60, opacity: 0, duration: 1 }, "-=0.8")
        .from(".home-description", { x: 60, opacity: 0, duration: 1 }, "-=0.8")
        .from(".home-buttons .btn", {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.8,
          ease: "back.out(1.7)",
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Lottie background animation
  useEffect(() => {
    if (lottieRef.current) {
      const anim = lottie.loadAnimation({
        container: lottieRef.current,
        animationData: leatherShowcase,
        renderer: "svg",
        loop: true,
        autoplay: true,
      });

      return () => anim.destroy();
    }
  }, []);

  return (
    <section id="home" className="home-section" ref={sectionRef}>
      {/* JSON Background Animation */}
      <div className="lottie-background" ref={lottieRef}></div>

      {/* Stars Background Canvas */}
      <canvas id="stars-canvas"></canvas>

      {/* Overlay Gradient */}
      <div className="home-overlay"></div>

      {/* Content */}
      <div className="home-container" ref={contentRef}>
        <div className="home-right">
          <h1 className="home-title">Welcome to UI Kart</h1>
          <p className="home-description">
            UI Kart is your trusted destination for premium leather bags,
            wallets, and accessories. We merge traditional craftsmanship with
            modern aesthetics to bring you timeless, high-quality leather goods
            designed for everyday elegance and durability. Explore our
            collection and experience luxury that lasts.
          </p>
          <div className="home-buttons">
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <a href="#products" className="btn btn-primary glow">
                Explore Products
              </a>
            </Tilt>
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <a href="#contact" className="btn btn-secondary glow">
                Contact Us
              </a>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};
