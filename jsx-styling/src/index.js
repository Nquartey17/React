import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200"

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">My Favourite Foods</h1>
    <img src={img + "?grayscale"} />
    <ul>
      <img className= "food-img" src="https://www.celebritycruises.com/blog/content/uploads/2022/01/uruguayan-food-asado-faq-1920x890.jpg"></img>
      <img className= "food-img" src="https://www.recipetineats.com/wp-content/uploads/2022/09/Crispy-Fries_8.jpg?w=500&h=500&crop=1"></img>
      <img className= "food-img" src="https://www.allrecipes.com/thmb/iXKYAl17eIEnvhLtb4WxM7wKqTc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/240376-homemade-pepperoni-pizza-Beauty-3x4-1-6ae54059c23348b3b9a703b6a3067a44.jpg"></img>
    </ul>
  </div>,
  document.getElementById("root")
);
