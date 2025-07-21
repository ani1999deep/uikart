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

  // GSAP Scroll Animation
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

  // Lottie Background Animation
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      animationData: leatherShowcase,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });

    return () => anim.destroy();
  }, []);

  return (
    <section id="home" className="home-section" ref={sectionRef}>
      <div className="lottie-background" ref={lottieRef} />
      <canvas id="stars-canvas" />

      <div className="home-overlay"></div>

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
            <div className="tilt-wrapper">
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div>
                  <a href="#products" className="btn btn-primary">
                    Explore Products
                  </a>
                </div>
              </Tilt>
            </div>
            <div className="tilt-wrapper">
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div>
                  <a href="#contact" className="btn btn-secondary">
                    Contact Us
                  </a>
                </div>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
