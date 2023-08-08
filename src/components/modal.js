import React from "react";
import ReactDOM from "react-dom";
import Close from "../assets/images/icon-close.svg";
import Rules from "../assets/images/image-rules.svg";

// To use react portals we have to import "import ReactDOM from "react-dom";"

const Modal = ({ toggleModalHandler }) => {
  return ReactDOM.createPortal (
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal__header">
          <h1>Rules</h1>
          <button onClick={toggleModalHandler}>
            <img src={Close} alt="Close" />
          </button>
        </div>
        <img src={Rules} alt="Rules" />
      </div>
    </div>,

    document.getElementById("modal")
  );
};

export default Modal;
