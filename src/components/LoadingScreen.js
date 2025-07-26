import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json"; // Make sure this path is correct
import "../css/LoadingScreen.css";

export const LoadingScreen = ({ onComplete = () => {} }) => {
  const [text, setText] = useState("");
  const fullText = "We will be launching our e-commerce website";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          if (typeof onComplete === "function") {
            onComplete();
          }
        }, 1000);
      }
    }, 80); // slightly faster for better pacing

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <Lottie
        animationData={loadingAnimation}
        loop
        autoplay
        className="loading-background"
      />

      <div className="loading-text">
        {text}
        <span className="blink"> | </span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
    </div>
  );
};
