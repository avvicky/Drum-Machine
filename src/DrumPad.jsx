import React from "react";

function DrumPad(props) {
  return (
    <span
      className="drum-pad"
      id={props.pad.sound}
      onClick={() => props.drumClick(props.pad.letter, props.pad.sound)}
    >
      <p>{props.pad.letter}</p>
      <audio
        className="clip"
        id={props.pad.letter}
        src={props.pad.src}
        type="audio/mpeg"
      ></audio>
      {/* onClick={props.pad.drumClick(props.pad.letter)} */}
    </span>
  );
}

export default DrumPad;
