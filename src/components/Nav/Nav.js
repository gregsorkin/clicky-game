// Dependencies
import React from "react";
import "./Nav.css";
import logo from "../../logo.png";

const Nav = props => (
  <nav>
    <ul>
      <li className="simpsonsLogo">
        <a href="/clicky-game/"><img src={logo} alt="The Simpsons Logo"/> </a>
      </li>
      <li className="brand animated lightSpeedIn">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="ci">{props.correctIncorrect}</li>

      <li id="cur-sco">Current Score: {props.score}</li>

      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;