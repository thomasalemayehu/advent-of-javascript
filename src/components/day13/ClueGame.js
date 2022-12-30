import React from "react";
import "../../assets/day13/styles/index.css";
import CloseButton from "../../assets/day13/icons/close.svg";
import ClueIcon from "../../assets/day13/images/elgato-key-light.png";
import { useState } from "react";
const ClueGame = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className="clue-game-bg-wrapper">
      <div className="clue-game-hint-area">
        <div className="clue-game-hint" onClick={toggleModal}></div>
      </div>

      {showModal && (
        <div className="clue-game-modal-wrapper">
          <div className="clue-game-modal">
            <img
              src={CloseButton}
              className="clue-game-close-button"
              onClick={toggleModal}
            />
            <div className="clue-game-modal-left">
              <h1>Elgato </h1>
              <h1>Key</h1>
              <h1>Light</h1>

              <div className="spacer"></div>

              <p>These lights are great if you shoot video at your desk.</p>

              <p>
                My desk is pushed up against the wall, so I didn’t have room for
                a large soft box. These lights still deliver on the look that I
                wanted. Plus, it comes with a desktop app where you can adjust
                the brightness and temperature.
              </p>
            </div>
            <div className="clue-game-modal-right">
              <img src={ClueIcon} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClueGame;
