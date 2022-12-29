import React from "react";
import "../../assets/day12/styles/result.css";
import Rock from "../../assets/day12/images/rock.png";
import Paper from "../../assets/day12/images/scissors.png";

import LossImage from "../../assets/day12/images/computer-wins.svg";
import WinImage from "../../assets/day12/images/you-win.svg";
import { useParams,useNavigate } from "react-router-dom";
const Result = () => {
  const { result } = useParams();
  const navigate = useNavigate();

  return (
    <div className="rpc-result-container">
      <img
        src={LossImage}
        alt=""
        className={`${result === "loss" ? "rpc-loss-image" : "rpc-image-hide"}`}
      />
      <div
        className={`${result === "loss" ? "rpc-loss-label" : "rpc-label-hide"}`}
      >
        Computer Wins!
      </div>
      <img
        src={WinImage}
        alt=""
        className={`${result === "win" ? "rpc-win-image" : "rpc-image-hide"}`}
      />
      <div
        className={`${result === "win" ? "rpc-win-label" : "rpc-label-hide"}`}
      >
        You Win!
      </div>

      <div
        className={`${result === "draw" ? "rpc-draw-label" : "rpc-label-hide"}`}
      >
        Draw!
      </div>
      <div className="rpc-result-player-move">
        <img src={Rock} alt="" />
      </div>

      <div className="rpc-result-computer-move">
        <img src={Paper} alt="" />
      </div>

      <button className="rpc-result-play-again" onClick={() => {
        navigate("/rock-paper-scissor");
      }}>play again?</button>
    </div>
  );
};

export default Result;
