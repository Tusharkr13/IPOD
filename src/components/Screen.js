import React from "react";

function Screen({ currentOption, submenu }) {
  return (
    <div className="screen">
      {submenu ? (
        <div>
          <h2>{currentOption}</h2>
          <ul>
            {submenu.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ) : (
        <h2>{currentOption}</h2>
      )}
    </div>
  );
}

export default Screen;
