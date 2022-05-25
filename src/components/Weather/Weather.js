import React from "react";
import DateBuilder from "./Date";
import classes from "./Weather.module.css";

const Weather = (props) => {
  return (
    <div>
      {" "}
      {typeof props.weather.main != "undefined" ? (
        <div>
          <div className={classes.location_box}>
            <div className={classes.location}>
              {props.weather.name}, {props.weather.sys.country}
            </div>
            {/* <div className={classes.date}>{dateBuilder(new Date())}</div> */}
            <DateBuilder dateB={new Date()}></DateBuilder>
          </div>
          <div className={classes.weather_box}>
            <div className={classes.temp}>
              {Math.round(props.weather.main.temp)}°c
            </div>
            <div className={classes.weather}>
              {props.weather.weather[0].main}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Weather;
