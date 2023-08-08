import React, { useState } from "react";
import Modal from "./modal";

const Footer = () => {

  const [modal, setModal] = useState(false);

  const toggleModalHandler = () => {
    setModal(!modal);
  };

  return (
    <>
      <footer className="footer">
        <div className="attribution">
          Challenge by &nbsp;
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>{" "}
          . Coded by &nbsp;
          <a href="#" target="_blank">
            Madhav M
          </a>
          .
        </div>
        <button className="rules" onClick={toggleModalHandler}>
          Rules
        </button>
      </footer>
      {modal ? <Modal toggleModalHandler={toggleModalHandler} /> : ""}
    </>
  );
};

export default Footer;
