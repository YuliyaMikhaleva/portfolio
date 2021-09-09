import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

//strictmode - компонент, который позволяет обнаружить потенциальные проблемы в приложения
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
