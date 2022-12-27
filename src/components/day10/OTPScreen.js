import React, { useState } from "react";
import "../../assets/day10/styles/index.css";
const OTPScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [focusedIndex, setFocusedIndex] = useState(1);

  const onChange = (e) => {
    if (inputValue.length === 0) {
      setInputValue(e.target.value);
      setFocusedIndex(2);
    } else {
      if (inputValue.length === 1) {
        setInputValue(inputValue + e.target.value[e.target.value.length - 1]);
        setFocusedIndex(3);
      } else if (inputValue.length === 2) {
        setInputValue(inputValue + e.target.value[e.target.value.length - 1]);
        setFocusedIndex(4);
      } else if (inputValue.length === 3) {
        setInputValue(inputValue + e.target.value[e.target.value.length - 1]);
        setFocusedIndex(4);
      }
    }
  };

  console.log("Rendering");

  return (
    <div className="otp-screen-container">
      <div className="otp-screen-wrapper">
        <h1>authorization code</h1>
        <p>Please enter the code that we sent to (***) *** - 09351.</p>
        <div className="otp-input-wrapper">
          <input
            type="text"
            className="otp-screen-input"
            value={inputValue[0] ? inputValue[0] : ""}
            autoFocus={focusedIndex === 1}
            onChange={onChange}
          />
          <input
            type="text"
            className="otp-screen-input"
            value={inputValue[1] ? inputValue[1] : ""}
            autoFocus={focusedIndex === 2}
            onChange={onChange}
          />
          <input
            type="text"
            className="otp-screen-input"
            value={inputValue[2] ? inputValue[2] : ""}
            autoFocus={focusedIndex === 3}
            onChange={onChange}
          />
          <input
            type="text"
            className="otp-screen-input"
            value={inputValue[3] ? inputValue[3] : ""}
            autoFocus={focusedIndex === 4}
            onChange={onChange}
          />
        </div>

        <button className="otp-verify-button">Verify</button>
      </div>
    </div>
  );
};

export default OTPScreen;
