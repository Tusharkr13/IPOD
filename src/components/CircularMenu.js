import React, { useState } from "react";

function CircularMenu({ menuOptions, onSelect, onBack }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const rotateSelection = (direction) => {
    if (direction === "clockwise") {
      setSelectedIndex((prev) => (prev + 1) % menuOptions.length);
    } else {
      setSelectedIndex((prev) =>
        prev === 0 ? menuOptions.length - 1 : prev - 1
      );
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "ArrowRight") {
      rotateSelection("clockwise");
    } else if (e.key === "ArrowLeft") {
      rotateSelection("anticlockwise");
    } else if (e.key === "Enter") {
      onSelect(menuOptions[selectedIndex]);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [selectedIndex]);

  return (
    <div className="circular-menu">
      <button
        className="rotate-cw"
        onClick={() => rotateSelection("clockwise")}
      >
        Next
      </button>
      <button
        className="rotate-ccw"
        onClick={() => rotateSelection("anticlockwise")}
      >
        Prev
      </button>
      <button className="select" onClick={() => onSelect(menuOptions[selectedIndex])}>
        Select
      </button>
      <button className="menu-back" onClick={onBack}>
        Menu
      </button>
    </div>
  );
}

export default CircularMenu;
