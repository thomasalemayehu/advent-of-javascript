import React from "react";
import "../../assets/day12/styles/index.css";
import Rock from "../../assets/day12/images/rock.png";
import Paper from "../../assets/day12/images/paper.png";
import Scissor from "../../assets/day12/images/scissors.png";
import { useNavigate } from "react-router-dom";

export const RockPaperScissorScreen = () => {
  const navigate = useNavigate();
  const onPlayed = (userAction) => {
    const wins = {
      "paper":"scissor",
      "rock":"paper",
      "scissor":"rock",
    };
    const actions = ["rock","paper","scissor"];
    var computerAction = actions[Math.floor(Math.random() * actions.length)];

    let gameResult="loss";

    if(userAction === computerAction){
      gameResult = "draw";
    }else{
      const result = wins[computerAction] === userAction;

      if(result){
        gameResult = "win";
      }
      navigate(`/rock-paper-scissor/${(gameResult)}`);
    }
  };
  return (
    <div className="rpc-container">
      <p className="rpc-title">pick one</p>
      <div className="rpc-options-wrapper">
        {/*  */}
        <div
          className="rpc-option"
          onClick={() => {
            onPlayed("rock");
          }}
        >
          <img src={Rock} className="rpc-option-image" />
          <div className="rpc-option-label">rock</div>
        </div>

        {/*  */}
        <div
          className="rpc-option"
          onClick={() => {
            onPlayed("paper");
          }}
        >
          <img src={Paper} className="rpc-option-image" />
          <div className="rpc-option-label">paper</div>
        </div>

        {/*  */}
        <div
          className="rpc-option"
          onClick={() => {
            onPlayed("scissor");
          }}
        >
          <img src={Scissor} className="rpc-option-image" />
          <div className="rpc-option-label">scissor</div>
        </div>
      </div>
    </div>
  );
};
