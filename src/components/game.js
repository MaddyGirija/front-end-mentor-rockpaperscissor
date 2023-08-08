import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({ score, setScore, myChoice }) => {

  // State to set the choice for house
  const [house, setHouse] = useState("");
  // State to decide the win, loss or draw
  const [playerWin, setPlayerWin] = useState("");
  // Timer for housePlayer
  const [counter, setCounter] = useState(3);


  // Function to pick a random choice for house
  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newHousePick();
  }, []);

  const Result = () => {
    if (myChoice === "rock" && house === "scissors") {
      setPlayerWin("Win");
      setScore(score + 1);
    } else if (myChoice === "rock" && house === "paper") {
      setPlayerWin("Lose");
      setScore(score - 1);
    } else if (myChoice === "scissors" && house === "paper") {
      setPlayerWin("Win");
      setScore(score + 1);
    } else if (myChoice === "scissors" && house === "rock") {
      setPlayerWin("Lose");
      setScore(score - 1);
    } else if (myChoice === "paper" && house === "rock") {
      setPlayerWin("Win");
      setScore(score + 1);
    } else if (myChoice === "paper" && house === "scissors") {
      setPlayerWin("Lose");
      setScore(score - 1);
    } else {
      setPlayerWin("Draw");
    }
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : Result();

    return () => {
      clearInterval(timer);
    };
  }, [house, counter]);

  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You Picked</span>
        <div
          className={`icon icon--${myChoice} ${
            playerWin === "Win" ? `icon icon--${myChoice}--winner` : ""
          }`}
        ></div>
      </div>

      {playerWin === "Win" && (
        <div className="game__play">
          <span className="text">You Win</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play again
          </Link>
        </div>
      )}
      {playerWin === "Lose" && (
        <div className="game__play">
          <span className="text">You Lose</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play again
          </Link>
        </div>
      )}
      {playerWin === "Draw" && (
        <div className="game__play">
          <span className="text">Draw</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play again
          </Link>
        </div>
      )}

      <div className="game__house">
        <span className="text">House Picked</span>
        {counter === 0 ? (
          <div
            className={`icon icon--${house} ${
              playerWin === "Lose" ? `icon icon--${house}--winner` : ""
            }`}
          ></div>
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
    </div>
  );
};

export default Game;
