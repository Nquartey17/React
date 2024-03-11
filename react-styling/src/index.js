import React from "react";
import ReactDOM from "react-dom";

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

const currentDate = new Date();
const hour = currentDate.getHours();
let timeOfDay = "Morning";
const customStyle = {
  color: "red",
};

if (hour >= 12 && hour <= 18) {
  timeOfDay = "Afternoon";
  customStyle.color = "green";
} else if (hour >= 19) {
  timeOfDay = "Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      Good {timeOfDay}
    </h1>
  </div>,
  document.getElementById("root")
);
