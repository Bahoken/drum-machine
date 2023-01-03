import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [activeKey, setActiveKey] = useState('nonea');

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      // console.log(event.key.toUpperCase());
      playSound(event.key.toUpperCase());
    })
  }, [])

  const drumPads = [
    {
      key: "Q",
      id: "Heat-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      key: "W",
      id: "Heat-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      key: "E",
      id: "Heat-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      key: "A",
      id: "Heat-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
      key: "S",
      id: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      key: "D",
      id: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      key: "Z",
      id: "Kick-n-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      key: "X",
      id: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      key: "C",
      id: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];


  function playSound(id) {
    const audio = document.getElementById(id);
    console.log(audio);
    audio.play();
    setActiveKey(id);
  }

  return (
    <div className="App">
      <h1>Drum machine ! Play song</h1>

      <div className="container">

        <div className="drum-description">
          <h1>MPD002</h1>
          <h3>Instructions</h3>
          <p>Let's play the music and enjoy the maiwmum you can cause it's time to dance dance a lot without stop yourself for anything ! enjoy guy we only have one life YOLO</p>
          <hr />
          <button>Let's make some noise</button>
        </div>

        <div id="drum-machine">

          <div id="display">Playing key : {activeKey}</div>

          <div className="drum-container">
            <div className="drum-pads">
              {drumPads.map(pad => {
                return (
                  <div
                    key={pad.id}
                    className="drum-pad"
                    id={pad.id}
                    onClick={() => {
                      playSound(pad.key)
                    }}>
                    {pad.key}
                    <audio
                      className='clip'
                      id={pad.key}
                      src={pad.url}>
                    </audio>
                  </div>)
              })}
            </div>
          </div>

        </div>
      </div>


    </div>
  );
}

export default App;
