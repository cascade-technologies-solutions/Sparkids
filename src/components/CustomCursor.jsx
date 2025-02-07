import React, { useEffect, useState } from "react";
import "../styles/CustomCursor.css";
import hoverImg from "../Assets/hover.png";
import flameImg from "../Assets/flame.png";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Update cursor position
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Detect hover on specific elements
    const handleMouseEnter = (e) => {
      const tagName = e.target.tagName.toLowerCase();
      if (tagName === "a" || tagName === "button") {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      const tagName = e.target.tagName.toLowerCase();
      if (tagName === "a" || tagName === "button") {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseEnter);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <img
          src={isHovering ? hoverImg : flameImg}
          alt="Cursor"
        />
      </div>
    </>
  );
};

export default CustomCursor;
