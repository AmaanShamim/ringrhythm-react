import React from "react";

export default function Drumpad(props) {
  function playAudio() {
    var audio = document.getElementById(props.keyTrigger);
    audio.src = props.url;
    audio.play();
  }

  return (
    <>
      <div className="drum-pad" id={props.id} onClick={playAudio}>
        {props.keyTrigger}
      </div>
      <audio className="clip" id={props.keyTrigger} src={props.url}></audio>
    </>
  );
}