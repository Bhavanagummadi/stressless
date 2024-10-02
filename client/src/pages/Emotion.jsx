import React, { useState, useEffect } from 'react';

const Emotion = ({ onNoClick }) => {
  const [startTime, setStartTime] = useState(null);
  const [timer, setTimer] = useState(0);
  const [isBreathing, setIsBreathing] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let timerInterval = null;
    if (isBreathing) {
      timerInterval = setInterval(() => {
        const now = new Date();
        setTimer(Math.floor((now - startTime) / 1000));
      }, 1000);
    } else if (!isBreathing && timer !== 0) {
      clearInterval(timerInterval);
    }
    return () => clearInterval(timerInterval);
  }, [isBreathing, startTime]);

  const startBreathHold = () => {
    resetMessages();
    setStartTime(new Date());
    setIsBreathing(true);
    setTimer(0);
  };

  const stopBreathHold = () => {
    setIsBreathing(false);
    setShowPopup(true);
    const timeHeld = timer;
    displayPerformanceMessages(timeHeld);
  };

  const displayPerformanceMessages = (seconds) => {
    if (seconds > 1 && seconds < 10) {
      document.getElementById('poorMessage').style.display = 'block';
    }
    if (seconds >= 11 && seconds < 21) {
      document.getElementById('okayMessage').style.display = 'block';
    }
    if (seconds >= 21 && seconds < 31) {
      document.getElementById('intermediateMessage').style.display = 'block';
    }
    if (seconds >= 31 && seconds < 46) {
      document.getElementById('goodMessage').style.display = 'block';
    }
    if (seconds >= 46 && seconds < 61) {
      document.getElementById('proMessage').style.display = 'block';
    }
    if (seconds >= 61 && seconds < 75) {
      document.getElementById('supremeMessage').style.display = 'block';
    }
    if (seconds >= 75) {
      document.getElementById('godLevelMessage').style.display = 'block';
    }
  };

  const resetMessages = () => {
    [
      'poorMessage',
      'okayMessage',
      'intermediateMessage',
      'goodMessage',
      'proMessage',
      'supremeMessage',
      'godLevelMessage',
      'restMessage',
    ].forEach((msg) => {
      document.getElementById(msg).style.display = 'none';
    });
  };

  const reattemptGame = () => {
    setIsBreathing(false);
    setTimer(0);
    setShowPopup(false);
  };

  const closePopup = () => {
    setShowPopup(false);
    onNoClick(); // Scroll to the music section when "No" is clicked
  };

  return (
    <div>
      <style>
        {`
          .rest-message {
            font-size: 2rem;
            font-weight: bold;
            color: tomato;
            position: absolute;
            top: 50px;
            left: 50%;
            transform: translateX(-50%);
            display: none;
          }

          .poor-message,
          .okay-message,
          .intermediate-message,
          .good-message,
          .pro-message,
          .supreme-message,
          .god-level-message {
            font-size: 3rem;
            margin-bottom: 20px;
            display: none;
          }

          .poor-message { color: red; }
          .okay-message { color: orange; }
          .intermediate-message { color: royalblue; }
          .good-message { color: mediumseagreen; }
          .pro-message { color: green; }
          .supreme-message { color: blue; }
          .god-level-message { color: purple; }

          .game-container {
            text-align: center;
            padding: 20px;
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            position: relative;
          }

          h1 {
            color: #333;
          }

          .timer {
            font-size: 2rem;
            margin: 20px 0;
          }

          button {
            padding: 10px 20px;
            font-size: 1.2rem;
            border: none;
            background-color: #008000;
            color: white;
            border-radius: 5px;
            cursor: pointer;
          }

          button:hover {
            background-color: #45a049;
          }

          button:disabled {
            background-color: #999;
            cursor: not-allowed;
          }

          .message {
            margin-top: 20px;
            font-size: 1.2rem;
            color: #555;
          }

          .popup {
            display: block;
            position: absolute;
            top: 120%;
            left: 50%;
            transform: translateX(-50%);
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            z-index: 1;
          }

          .popup p {
            margin-bottom: 10px;
          }

          .popup-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
          }

          .popup button {
            background-color: #007BFF;
            color: white;
            border-radius: 5px;
            padding: 10px 20px;
            border: none;
            font-size: 1rem;
            cursor: pointer;
          }

          .popup button:hover {
            background-color: #0069D9;
          }
        `}
      </style>

      <div className="rest-message" id="restMessage">
        Great job! Now you can take rest for a few minutes
      </div>

      <div className="poor-message" id="poorMessage">
        Poor
      </div>
      <div className="okay-message" id="okayMessage">
        Keep Going...
      </div>
      <div className="intermediate-message" id="intermediateMessage">
        Intermediate
      </div>
      <div className="good-message" id="goodMessage">
        Good
      </div>
      <div className="pro-message" id="proMessage">
        You are a PRO
      </div>
      <div className="supreme-message" id="supremeMessage">
        Supreme mode
      </div>
      <div className="god-level-message" id="godLevelMessage">
        HURRAYY..You can stop now
      </div>

      <div className="game-container">
        <h1>Breath Hold Challenge</h1>
        <div className="timer">{timer}s</div>
        <button onClick={startBreathHold} disabled={isBreathing}>
          Start Holding Breath
        </button>
        <button onClick={stopBreathHold} disabled={!isBreathing}>
          Stop
        </button>
        <div className="message">
          {isBreathing ? 'Hold your breath!' : `You held your breath for ${timer} seconds!`}
        </div>

        {showPopup && (
          <div className="popup">
            <p>Do you want to reattempt the game?</p>
            <div className="popup-buttons">
              <button onClick={reattemptGame}>Yes</button>
              <button onClick={closePopup}>No</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Emotion;
