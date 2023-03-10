import React, { useState } from "react";
import "./App.css";
import DrumPad from "./DrumPad";

const pads = [
  {
    letter: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    sound: "Heater-1",
  },
  {
    letter: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    sound: "Heater-2",
  },
  {
    letter: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    sound: "Heater-3",
  },
  {
    letter: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    sound: "Heater-4",
  },
  {
    letter: "S",
    //clap
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    sound: "Clap",
  },
  {
    letter: "D",
    //open-Hh
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    sound: "Open-HH",
  },
  {
    letter: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    sound: "Kick_n_Hat",
  },
  {
    letter: "X",
    //kick
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    sound: "Kick",
  },
  {
    letter: "C",
    //closed-hh
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    sound: "Closed-HH",
  },
];

function App() {
  const [delement, setDElement] = useState("");
  const drumClick = (letter, sound) => {
    console.log(letter + " cliked");
    document.getElementById(letter).play();
    setDElement(sound);
  };

  const handleKeyDown = (e) => {
    console.log(e.key);
    var letter = e.key.toUpperCase();
    switch (letter) {
      case "Q":
        document.getElementById(letter).play();
        setDElement("Heater-1");
        break;
      case "W":
        document.getElementById(letter).play();
        setDElement("Heater-2");
        break;
      case "E":
        document.getElementById(letter).play();
        setDElement("Heater-3");
        break;
      case "A":
        document.getElementById(letter).play();
        setDElement("Heater-4");
        break;
      case "S":
        document.getElementById(letter).play();
        setDElement("Clap");
        break;
      case "D":
        document.getElementById(letter).play();
        setDElement("Open-HH");
        break;
      case "Z":
        document.getElementById(letter).play();
        setDElement("Kick_n_Hat");
        break;
      case "X":
        document.getElementById(letter).play();
        setDElement("Kick");
        break;
      case "C":
        document.getElementById(letter).play();
        setDElement("Closed-HH");
        break;

      default:
        break;
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  return (
    <div id="drum-machine">
      <div id="display">{delement}</div>
      <div id="drum-pad-wrap">
        {pads.map((pad, index) => {
          return <DrumPad pad={pad} key={index} drumClick={drumClick} />;
        })}
      </div>
    </div>
  );
}

export default App;
