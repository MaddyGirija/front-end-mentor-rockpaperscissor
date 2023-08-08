import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Play from "./components/play";
import Game from "./components/game";

function App() {

  // Store own-choice which can be Rock, Paper, Scissor
  const [myChoice, setMyChoice] = useState("");
  // Store to hold the score
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="container">
        <Header score={score} />
        <Routes>
          <Route exact path="/" element={<Play setMyChoice={setMyChoice} />} />
          <Route
            exact
            path="/game"
            element={
              <Game score={score} setScore={setScore} myChoice={myChoice} />
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
