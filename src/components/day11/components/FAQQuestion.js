import React from "react";
import { useState } from "react";
import ChevronIcon from "../../../assets/day11/icons/chevron.svg";
import CloseIcon from "../../../assets/day11/icons/close.svg";

const FAQQuestion = ({
  QuestionIcon,
  question,
  answerPartOne,
  answerPartTwo,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onToggleSection = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`faq-question ${isExpanded ? "faq-question-large-gap" : ""}`}
    >
      <div className="faq-wrapper">
        <div className="faq-main">
          <div className="faq-main-leading-icon">
            <img src={QuestionIcon} alt="" />
          </div>

          <div className="faq-main-text">{question}</div>
        </div>
        <div className={`faq-collapsible ${isExpanded ? "faq-expanded" : ""}`}>
          <p
            className={`${
              isExpanded ? "faq-answer-show " : "faq-answer-hide "
            }`}
          >
            {answerPartOne}
          </p>

          <p
            className={`${
              isExpanded ? "faq-answer-show " : "faq-answer-hide "
            }`}
          >
            {answerPartTwo}
          </p>
        </div>
        <div className="faq-main-trailing-icon" onClick={onToggleSection}>
          <img src={isExpanded ? CloseIcon : ChevronIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FAQQuestion;
