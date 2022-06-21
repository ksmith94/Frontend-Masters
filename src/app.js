import { React } from "react";
import { ReactDOM } from "react-dom";
import { Pet } from "./pet.js";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Otto",
      animal: "Dog",
      breed: "Mini Poodle",
    }),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Daisy",
      animal: "Dog",
      breed: "Wheaten",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
