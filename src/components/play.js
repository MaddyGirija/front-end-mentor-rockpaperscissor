import React from "react";
import { Link } from "react-router-dom";
import Triangle from "../assets/images/bg-triangle.svg";

const Play = ({ setMyChoice }) => {
    
  // Function to get the state [rock, paper or scissor] and set it to setMyChoice
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };

  return (
    <>
      <div className="play">
        <img src={Triangle} alt="triangle bg" className="triangle" />
        <div className="items">
          <Link to="/game">
            <div
              data-id="paper"
              onClick={setChoice}
              className="icon icon--paper"
            ></div>
          </Link>
          <Link to="/game">
            <div
              data-id="scissors"
              onClick={setChoice}
              className="icon icon--scissor"
            ></div>
          </Link>
          <Link to="/game">
            <div
              data-id="rock"
              onClick={setChoice}
              className="icon icon--rock"
            ></div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Play;
