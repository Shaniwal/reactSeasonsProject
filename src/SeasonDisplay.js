import React from "react";
import "./style.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the Beach",
    iconName: "sun outline",
  },
  winter: {
    text: "Brr it is cold",
    iconName: "snowflake outline",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat < 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={` ${iconName} icon icon-left massive  icon`}></i>

      <h1>{text}</h1>

      <i className={` ${iconName} icon icon-right massive  icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
