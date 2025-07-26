import "../../css/Projects.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import leatherAnimation from "../../assets/projects.json"; // Replace with your Lottie background

gsap.registerPlugin(ScrollTrigger);

export const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(".product-card");

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 50,
        rotateX: 45,
        transformPerspective: 1000,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const productData = [
    {
      title: "Ladies Handbags",
      description:
        "Elegant leather and non-leather handbags combining fashion and utility, perfect for every occasion.",
      material: ["Genuine Leather", "PU Leather", "Canvas", "Vegan Leather"],
    },
    {
      title: "Gents Bags",
      description:
        "Premium office and travel bags designed with class, space, and strength for the modern man.",
      material: ["Leather", "Rexine", "PU", "Canvas"],
    },
    {
      title: "Wallets",
      description:
        "Sleek and stylish wallets in various colors and textures for both men and women.",
      material: ["Leather", "Synthetic", "Vegan Options"],
    },
    {
      title: "Belts",
      description:
        "Durable, classy belts crafted from quality leather and synthetic alternatives.",
      material: ["Full-Grain Leather", "PU Leather", "Faux Leather"],
    },
  ];

  return (
    <section id="products" className="products-section" ref={sectionRef}>
      <div className="lottie-bg">
        <Lottie animationData={leatherAnimation} loop={true} />
      </div>

      <div className="products-container">
        <h2 className="products-title">
          👜 Our Leather & Non-Leather Collection
        </h2>
        <div className="products-grid">
          {productData.map((product, index) => (
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} key={index}>
              <div className="product-card">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-desc">{product.description}</p>
                <div className="product-materials">
                  {product.material.map((mat, idx) => (
                    <span key={idx} className="material-badge">
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};
