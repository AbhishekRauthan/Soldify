import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Context, { store } from "./context/store";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Context.Provider value={store}>
        <App />
      </Context.Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
