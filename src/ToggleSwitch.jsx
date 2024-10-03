import React from "react";
import "./ToggleSwitch.css";
{
  /* Importa o arquivo css*/
}

function ToggleSwitch({ isOn, onToggle }) {
  return (
    <label className="switch">
      <input
        type="checkbox"
        className="hidden-checkbox"
        checked={isOn}
        onChange={onToggle}
      />
      <span className={`slider ${isOn ? "on" : ""}`}></span>
    </label>
  );
}

export default ToggleSwitch;
