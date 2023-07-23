import React, { useMemo, useState } from "react";
import Drumpad from "./Drumpad";

export default function DrumMachine() {
  const [display, setdisplay] = useState("");
  const [power, setpower] = useState(true);
  const [volume, setvolume] = useState(0.5);
  const notes = useMemo(
    () => [
      {
        keyCode: 81,
        keyTrigger: "Q",
        id: "Heater-1",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      },
      {
        keyCode: 87,
        keyTrigger: "W",
        id: "Heater-2",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      },
      {
        keyCode: 69,
        keyTrigger: "E",
        id: "Heater-3",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      },
      {
        keyCode: 65,
        keyTrigger: "A",
        id: "Heater-4",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      },
      {
        keyCode: 83,
        keyTrigger: "S",
        id: "Clap",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      },
      {
        keyCode: 68,
        keyTrigger: "D",
        id: "Open-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      },
      {
        keyCode: 90,
        keyTrigger: "Z",
        id: "Kick-n'-Hat",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      },
      {
        keyCode: 88,
        keyTrigger: "X",
        id: "Kick",
        url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      },
      {
        keyCode: 67,
        keyTrigger: "C",
        id: "Closed-HH",
        url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      },
    ],
    []
  );
  const handlePowerToggle = () => {
    setpower(!power);
    setdisplay(!power ? "" : "Power Off");
  };
  const handleVolumeChange = (event) => {
    if (!power) return;
    const newVolume = event.target.value;
    setvolume(newVolume);
    setdisplay("Volume: " + volume * 100);
  };

  return (
    <div className="container">
      <div id="drum-machine">
        <div className="controls">
          <div className="power-button" onClick={handlePowerToggle}>
            <i style={{
                color: power?"white":"grey",
                lineHeight: "32px"
            }} className="fa-solid fa-power-off fa-lg"></i>
          </div>
          <div id="display">{display}</div>
          <div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
            />
          </div>
        </div>
        <div className="grid-container">
          {notes.map((elem, index) => {
            return (
              <Drumpad
                keyCode={elem.keyCode}
                keyTrigger={elem.keyTrigger}
                id={elem.id}
                url={elem.url}
                key={index}
                display={display}
                power={power}
                notes={notes}
                volume={volume}
                setdisplay={setdisplay}
              />
            );
          })}
        </div>
      </div>
      <span id="tribute">coded & designed by Amaan Shamim Khan</span>
    </div>
  );
}