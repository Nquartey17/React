// CHALLENGE: uncomment the code below and see the car stats rendered
// import animals, { useAnimals } from "./data";
// console.log(animals);

// we are using [] to destruct an array
// const [cat, dog] = animals;
// console.log(cat);

// Use {} to destruct an object
//Object names must be the same as variable name, or rename them with :
// const { name: catName, sound: catSound } = cat;

// if name/sound is undefined, use values below
// const { name = "Fluffy", sound = "Purr" } = cat;

// : can also be used to destructure a nested object
// const {
//   name,
//   sound,
//   feedingRequirements: { food, water },
// } = cat;
// console.log(food);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const {
  coloursByPopularity: [hondaTopColour],
} = honda;
const {
  coloursByPopularity: [teslaTopColour],
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
