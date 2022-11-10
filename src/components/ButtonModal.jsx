import React from "react";
import "../css/buttonModal.css";

const ButtonModal = ({ setButtonModal, showTime }) => {
  return (
    <div className="modal">
      <h2>You have Booked this movie</h2>
      <p>At this time: {showTime}</p>
      <button
        onClick={() => {
          setButtonModal(false);
        }}
      >
        x
      </button>
    </div>
  );
};

export default ButtonModal;
