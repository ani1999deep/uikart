import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";

export const Starfield = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadBasic(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "#0d0d0d" },
        fpsLimit: 60,
        particles: {
          color: { value: "#ffffff" },
          links: { enable: true, color: "#ffffff", distance: 150 },
          move: { enable: true, speed: 0.6 },
          number: { value: 60 },
          opacity: { value: 0.5 },
          size: { value: 1.5 },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100 } },
        },
      }}
    />
  );
};
