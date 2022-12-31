import React from "react";
import "../../assets/day14/styles/index.css";
import NextIcon from "../../assets/day14/icons/next.svg";
import PrevIcon from "../../assets/day14/icons/previous.svg";
const Calender = () => {
  const currentDate = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayLimits = {
    September: 30,
    April: 30,
    June: 30,
    November: 30,
    February: 28,
  };

  const maxDate = dayLimits[months[currentDate.getMonth()]]
    ? dayLimits[months[currentDate.getMonth()]]
    : 31;

  const today = currentDate.getDate();

  const befores = [];

  const afters = [];

  for (let i = 1; i <= today; i++) {
    befores.push(i);
  }

  for (let i = today + 1; i <= maxDate; i++) {
    afters.push(i);
  }

  console.log(befores);
  console.log(afters);

  const dayOptions = [
    {
      id: 1,
      label: "S",
    },
    {
      id: 2,
      label: "M",
    },
    {
      id: 3,
      label: "T",
    },
    {
      id: 4,
      label: "W",
    },
    {
      id: 5,
      label: "T",
    },
    {
      id: 6,
      label: "F",
    },
    {
      id: 7,
      label: "S",
    },
  ];
  return (
    <div className="calender-picker-container">
      <div className="calender-picker-wrapper">
        {/*  */}
        <div className="calender-picker-month-display-wrapper">
          <img src={PrevIcon} alt="" className="calender-picker-control" />

          <div className="calender-picker-month">December</div>
          <img src={NextIcon} alt="" className="calender-picker-control" />
        </div>

        {/*  */}
        <div className="calender-picker-labels">
          {dayOptions.map(({ id, label }) => (
            <div className="calender-picker-label" key={id}>
              {label}
            </div>
          ))}
        </div>

        {/*  */}
        <div className="calender-picker-values">
          {befores.map((number) => (
            <div
              className={`calender-picker-value ${
                today === number ? "calender-picker-active-date" : ""
              }`}
              key={number}
            >
              {number}
            </div>
          ))}

          {afters.map((number) => (
            <div className="calender-picker-value" key={number}>
              {number}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calender;
