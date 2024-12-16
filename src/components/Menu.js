import React from "react";

function Menu({ options, selectedIndex }) {
  return (
    <ul className="menu">
      {options.map((option, index) => (
        <li key={index} className={index === selectedIndex ? "selected" : ""}>
          {option}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
