import React from "react";

export default function Drumpad(props) {
  function playAudio() {
    var audio = document.getElementById(props.keyTrigger);
    audio.volume = props.volume;
    audio.src = props.url;
    audio.play();
    props.updateDisplay(props.id);
  }

  return (
    <>
      <div className="drum-pad" id={props.id} onClick={playAudio}>
        <audio className="clip" id={props.keyTrigger} src={props.url}></audio>
        {props.keyTrigger}
      </div>
    </>
  );
}
