import React from "react";
import "../../assets/day11/styles/index.css";
import QuestionIconOne from "../../assets/day11/icons/question-2.svg";
import QuestionIconTwo from "../../assets/day11/icons/question-1.svg";
import FAQQuestion from "./components/FAQQuestion";
const FAQScreen = () => {

  const questions = [
    {
      QuestionIcon:QuestionIconOne,
      question:"Technically, Svelte is a library and SvelteKit is a framework. Whats the difference?",
      answerPartOne:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad    minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
      answerPartTwo:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut.Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteursint occaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum."
    },

    {
      QuestionIcon:QuestionIconTwo,
      question:"Do you provide a certificate of completion? ",
      answerPartOne:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad    minim veniam, quis nostrud exercitation ullamco laboris nisi ut.",
      answerPartTwo:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut.Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteursint occaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum."
    },
  ];
  return (
    <div className="faq-container">
      {questions.map((question) => <FAQQuestion key={question.question} {...question}/>)}
    </div>
  );
};

export default FAQScreen;