import React, { useEffect, useRef } from "react";
import "./Rain.css";

const RainBackground = () => {
  const rainRef = useRef();

  useEffect(() => {
    const container = rainRef.current;
    if (!container) return;
    container.innerHTML = "";

    let increment = 0;

    while (increment < 100) {
      const delay = Math.floor(Math.random() * 100);
      const speed = Math.floor(Math.random() * 3 + 3);
      const left = increment;
      increment += Math.floor(Math.random() * 5 + 2);

      const drop = document.createElement("div");
      drop.className = "drop";
      drop.style.left = `${left}%`;
      drop.style.animationDelay = `0.${delay}s`;
      drop.style.animationDuration = `${speed}s`;

      const stem = document.createElement("div");
      stem.className = "stem";
      stem.style.animationDelay = `0.${delay}s`;
      stem.style.animationDuration = `${speed}s`;

      const splat = document.createElement("div");
      splat.className = "splat";
      splat.style.animationDelay = `0.${delay}s`;
      splat.style.animationDuration = `${speed}s`;

      drop.appendChild(stem);
      drop.appendChild(splat);
      container.appendChild(drop);
    }
  }, []);

  return <div className="rain" ref={rainRef}></div>;
};

export default RainBackground;
