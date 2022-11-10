import React from "react";
import "../css/filmList.css";
import { useState } from "react";
import ButtonModal from "./ButtonModal.jsx";

const FilmList = (props) => {
  // console.log(props.whatsOn.small);
  const [buttonModal, setButtonModal] = useState(false);
  const [showTime, setShowTime] = useState("");
  // console.log(buttonModal);
  console.log(showTime);

  return (
    <div className="filmContainer">
      <div className="imageTimeLayout">
        <img src={props.whatsOn.small} alt="" />
        <div className="timeLayout">
          <button
            value={props.showTimes[0]}
            onClick={(e) => {
              setShowTime(e.target.value);
            }}
          >
            {props.showTimes[0]}
          </button>
          <button
            value={props.showTimes[1]}
            onClick={(e) => {
              setShowTime(e.target.value);
            }}
          >
            {props.showTimes[1]}
          </button>
          <button
            value={props.showTimes[2]}
            onClick={(e) => {
              setShowTime(e.target.value);
            }}
          >
            {props.showTimes[2]}
          </button>
        </div>
      </div>
      <div className="filmLayout">
        <h1>{props.title}</h1>
        <p>{props.ageCert}</p>
        <p>{props.synopsis}</p>
        <button onClick={() => setButtonModal(true)}>Book</button>
        {buttonModal ? (
          <ButtonModal setButtonModal={setButtonModal} showTime={showTime} />
        ) : null}
      </div>
    </div>
  );
};

export default FilmList;
