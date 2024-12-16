import React, { useState } from "react";
import Menu from "./components/Menu";
import Screen from "./components/Screen";
import CircularMenu from "./components/CircularMenu";
import "./App.css";

function App() {
  const [currentOption, setCurrentOption] = useState("Menu");
  const [submenu, setSubmenu] = useState(null);

  const menuOptions = ["Settings", "Games", "Music"];
  
  const handleSelect = (option) => {
    if (option === "Music") {
      setCurrentOption("Music");
      setSubmenu(["All Songs", "Artists"]);
    } else {
      setCurrentOption(option);
    }
  };
  

  const handleBackToMenu = () => {
    setCurrentOption("Menu");
    setSubmenu(null);
  };

  

  return (
    <div className="ipod">
      <Screen currentOption={currentOption} submenu={submenu} />
      <CircularMenu 
        menuOptions={submenu || menuOptions} 
        onSelect={handleSelect} 
        onBack={handleBackToMenu} 
      />
    </div>
  );
}

export default App;
