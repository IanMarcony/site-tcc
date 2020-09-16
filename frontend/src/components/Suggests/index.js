import React from "react";

import "./styles.css";

function Suggests(props) {
  return (
    <li className="suggest">
      <h1>{props.author}</h1>
      <h2>{props.date}</h2>
      <p>{props.suggest}</p>
    </li>
  );
}

export default Suggests;
