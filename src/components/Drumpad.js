import React, { useState, useEffect, useCallback } from "react";

export default function Drumpad(props) {
  const [clicked, setclicked] = useState(false);

  const handleKeyPress = useCallback(
    (event) => {
      const { power, notes, volume, setdisplay } = props;
      if (!power) return;
      const keyCode = event.keyCode;
      const note = notes.find((note) => note.keyCode === keyCode);
      if (note) {
        const audio = document.getElementById(note.keyTrigger);
        if (audio) {
          audio.currentTime = 0;
          audio.volume = volume;
          audio.play();
          setdisplay(note.id);
        }
      }
    },
    [props]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  function playAudio() {
    if (!props.power) return;
    const audio = document.getElementById(props.keyTrigger);
    audio.volume = props.volume;
    audio.src = props.url;
    audio.play();
    props.setdisplay(props.id);
    setclicked(true);
    setTimeout(() => {
      setclicked(false);
    }, 50);
  }

  const defaultStyle = {
    color: "#fff",
    padding: "20px",
    backgroundColor: "rgb(0 0 0 / 80%)",
    textAlign: "center",
    borderRadius: "8px",
    fontFamily: "Cabin Sketch, cursive",
  };

  const clickedStyle = {
    padding: "20px",
    backgroundColor: "rgb(66 66 66 / 80%)",
    boxShadow: "inset 0px 0px 20px 1px white",
    textAlign: "center",
    borderRadius: "8px",
    color: "rgb(66 66 66 / 80%)",
  };

  return (
    <>
      <div
        style={clicked ? clickedStyle : defaultStyle}
        className="drum-pad"
        id={props.id}
        onClick={playAudio}
      >
        <audio className="clip" id={props.keyTrigger} src={props.url}></audio>
        {props.keyTrigger}
      </div>
    </>
  );
}