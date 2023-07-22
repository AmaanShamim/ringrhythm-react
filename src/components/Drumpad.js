import React from "react";

export default function Drumpad(props) {
  function playAudio() {
    if (!props.power) return;
    var audio = document.getElementById(props.keyTrigger);
    audio.volume = props.volume;
    audio.src = props.url;
    audio.play();
    props.updateDisplay(props.id);
  }
 
  const defaultStyle = {
    color: "#fff",
    padding: "20px",
    backgroundColor: "rgb(0 0 0 / 80%)",
    textAlign: "center",
    borderRadius: "8px",
  }

  const clickedStyle = {
    padding: "20px",
    backgroundColor: "rgb(95 95 95)",
    boxShadow: "0px 0px 10px 5px white",
    textAlign: "center",
    borderRadius: "8px",
    color: "rgb(95 95 95)",
  }

  return (
    <>
      <div style={defaultStyle} className="drum-pad" id={props.id} onClick={playAudio}>
        <audio className="clip" id={props.keyTrigger} src={props.url}></audio>
        {props.keyTrigger}
      </div>
    </>
  );
}
