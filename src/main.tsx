import React from "react";
import ReactDOM from "react-dom";
import Entrypoint from "./Entrypoint";

const rootNode = document.getElementById("root") as HTMLElement;

ReactDOM.render(
  <React.StrictMode>
    <Entrypoint />
  </React.StrictMode>,
  rootNode
);
