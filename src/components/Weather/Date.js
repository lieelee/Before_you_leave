import React from "react";
import classes from "./Date.module.css";

const DateBuilder = (props) => {
  let months = [
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
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.dateB.getDay()];
  let date = props.dateB.getDate();
  let month = months[props.dateB.getMonth()];
  let year = props.dateB.getFullYear();

  return (
    <div className={classes.date}>
      {day} {date} {month} {year}
    </div>
  );
};

export default DateBuilder;
