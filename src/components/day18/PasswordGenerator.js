/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../../assets/day18/styles/index.css";
import ClipboardIcon from "../../assets/day18/icons/copy.svg";
import UnCheckedIcon from "../../assets/day18/icons/checkbox--unchecked.svg";
import CheckedIcon from "../../assets/day18/icons/checkbox--checked.svg";
import { useEffect } from "react";
const PasswordGenerator = () => {
  // Static values
  const smallCaseAlphabets = [...Array(26)]
    .map((_, i) => String.fromCharCode(i + 97))
    .filter(
      (alphabet) => alphabet !== "i" && alphabet !== "l" && alphabet !== "o"
    );

  const upperCaseAlphabets = [...Array(26)]
    .map((_, i) => String.fromCharCode(i + 65))
    .filter(
      (alphabet) => alphabet !== "I" && alphabet !== "L" && alphabet !== "O"
    );

  const numbers = [...Array(10)]
    .map((_, i) => i)
    .filter((number) => number !== 0 && number !== 1);

  const symbols = [
    "[",
    "]",
    "{",
    "}",
    "(",
    ")",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    ".",
    "?",
    ">",
    "<",
    "'",
  ];

  const similarCharacters = ["i", "l", "1", "L", "o", "0", "O"];

  //   Options state
  const [passwordOptions, setPasswordOptions] = useState([
    { id: 1, label: "(@#$%)", boldLabel: "Include Symbols", isSelected: false },
    { id: 2, label: "(1234)", boldLabel: "Include Numbers", isSelected: false },
    {
      id: 3,
      label: "(abcd)",
      boldLabel: "Include Lowercase Characters",
      isSelected: true,
    },
    {
      id: 4,
      label: "(ABCD)",
      boldLabel: "Include Uppercase Characters",
      isSelected: false,
    },
    {
      id: 5,
      label: "(i, l, 1, L, o, 0, O)",
      boldLabel: "Exclude Similar Characters",
      isSelected: false,
    },
  ]);
  const [passwordSelectionOptions, setPasswordSelectionOptions] =
    useState(smallCaseAlphabets);

  const [showNotification,setShowNotification] = useState(false);

  const onCheckBoxClick = (optionId) => {
    const selectedOption = passwordOptions.filter(
      ({ id }) => id === optionId
    )[0];
    const filtered = passwordOptions
      .filter(({ id }) => id !== optionId)
      .concat({ ...selectedOption, isSelected: !selectedOption.isSelected })
      .sort((a, b) => a.id - b.id);

    //   symbols
    if (optionId === 1) {
      let newPasswordSelectOptions = [];

      // remove from options
      if (selectedOption.isSelected === true) {
        newPasswordSelectOptions = passwordSelectionOptions.filter(
          (option) => !symbols.includes(option)
        );
      } else {
        newPasswordSelectOptions = passwordSelectionOptions.concat(symbols);
      }
      console.log(newPasswordSelectOptions);

      setPasswordSelectionOptions(newPasswordSelectOptions);
    }
    // numbers
    else if (optionId === 2) {
      let newPasswordSelectOptions = [];

      // remove from options
      if (selectedOption.isSelected === true) {
        newPasswordSelectOptions = passwordSelectionOptions.filter(
          (option) => !numbers.includes(option)
        );
      } else {
        newPasswordSelectOptions = passwordSelectionOptions.concat(numbers);
      }
      console.log("🚀",newPasswordSelectOptions);
      setPasswordSelectionOptions(newPasswordSelectOptions);
    }

    // lower case
    else if (optionId === 3) {
      let newPasswordSelectOptions = [];

      // remove from options
      if (selectedOption.isSelected === true) {
        newPasswordSelectOptions = passwordSelectionOptions.filter(
          (option) => !smallCaseAlphabets.includes(option)
        );
      } else {
        newPasswordSelectOptions =
          passwordSelectionOptions.concat(smallCaseAlphabets);
      }
      setPasswordSelectionOptions(newPasswordSelectOptions);
    }

    // upper case
    else if (optionId === 4) {
      let newPasswordSelectOptions = [];

      // remove from options
      if (selectedOption.isSelected === true) {
        newPasswordSelectOptions = passwordSelectionOptions.filter(
          (option) => !upperCaseAlphabets.includes(option)
        );
      } else {
        newPasswordSelectOptions =
          passwordSelectionOptions.concat(upperCaseAlphabets);
      }
      setPasswordSelectionOptions(newPasswordSelectOptions);
    }

    // similar characters
    else if (optionId === 5) {
      let newPasswordSelectOptions = [];

      // remove from options
      if (selectedOption.isSelected === true) {
        newPasswordSelectOptions = passwordSelectionOptions.filter(
          (option) => !similarCharacters.includes(option)
        );
      } else {
        newPasswordSelectOptions =
          passwordSelectionOptions.concat(similarCharacters);
      }
      setPasswordSelectionOptions(newPasswordSelectOptions);
    }
    setPasswordOptions(filtered);
  };
  const [passwordLength, setPasswordLength] = useState(12);

  const onPasswordLengthChange = (e) => {
    setPasswordLength(e.target.value);
  };


  const [generatedPassword,setGeneratedPassword] = useState("");

  useEffect(() => {
    let newPassword= "";
    for(let i=0; i<passwordLength; i++){
      const currentIndex = Math.floor(Math.random() * (passwordSelectionOptions.length));
      newPassword += passwordSelectionOptions[currentIndex];
    }
    setGeneratedPassword(newPassword);
  },[passwordLength,passwordSelectionOptions]);

  return (
    <div className="password-generator-container">
      {/* Notification Element */}
      <div
        className={
          showNotification
            ? "password-generator-notification-container"
            : "password-generator-hidden-notification"
        }
      >
        Copied to clipboard!
      </div>
      {/* Main Wrapper */}
      <div className="password-generator-wrapper">
        {/* Display Section */}
        <div className="password-generator-display-wrapper">
          <div className="password-generator-password-display">
            {generatedPassword}
          </div>
          <img
            src={ClipboardIcon}
            alt=""
            onClick={() => {
              navigator.clipboard.writeText(generatedPassword);

              setShowNotification(true);

              const notificationTimeout = setTimeout(() => {
                setShowNotification(false);
                clearTimeout(notificationTimeout);
              }, 3000);
            }}
          />
        </div>

        {/* Slider Section */}
        <div className="password-generator-slider-container">
          <input
            type="range"
            id="password-generator-slider"
            value={passwordLength}
            step={1}
            min={8}
            max={24}
            onChange={onPasswordLengthChange}
          />
          <div>{passwordLength} Characters</div>
        </div>

        {/* Options Section */}
        <div className="password-generator-options-wrapper">
          {passwordOptions.map(({ id, label, boldLabel, isSelected }) => (
            <div
              key={id}
              className="password-generator-option"
              onClick={() => {
                onCheckBoxClick(id);
              }}
            >
              <img src={isSelected ? CheckedIcon : UnCheckedIcon} alt="" />
              <p>
                <span>{boldLabel}</span> {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
