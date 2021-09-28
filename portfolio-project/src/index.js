import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Portfolio } from "./components/Portfolio/Portfolio";

//strictmode - компонент, который позволяет обнаружить потенциальные проблемы в приложениb
//BrowserRouter для точ, чтобы были роуты
//папка components должна быть обязательно в src
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Portfolio} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
