import React, { useEffect, useMemo, useState } from "react";
import Drumpad from "./Drumpad";

export default function DrumMachine() {

    const [volume, setVolume] = useState(0.5);
    const [display, setdisplay] = useState("")

    const notes = useMemo(() =>[
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
], []);

  useEffect(() => {
    function handleKeyPress(event) {
      const keyCode = event.keyCode;
      const note = notes.find((note) => note.keyCode === keyCode);
      if (note) {
        const audio = document.getElementById(note.keyTrigger);
        if (audio) {
          audio.currentTime = 0;
          audio.volume = volume;
          audio.play();
          setdisplay(note.id)
        }
      }
    }
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [notes, volume]);

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
  };

  const updateDisplay = (value)=>{
    setdisplay(value);
  }

  return (
    <div id="drum-machine">
      <div className="controls">
         <button>on/off</button>
         <div id="display">{display}</div>
         <div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
      <div className="grid-container">
        {notes.map((elem, index) => {
          return (
            <Drumpad
              updateDisplay={updateDisplay}
              keyCode={elem.keyCode}
              keyTrigger={elem.keyTrigger}
              id={elem.id}
              url={elem.url}
              key={index}
              volume={volume}
            />
          );
        })}
      </div>
    </div>
  );
}
