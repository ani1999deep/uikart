import { useEffect, useState } from "react";
import "../css/LoadingScreen.css";

export const LoadingScreen = ({ onComplete = () => {} }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World />";

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
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-text">
        {text} <span className="blink"> | </span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill"></div>
      </div>
    </div>
  );
};
