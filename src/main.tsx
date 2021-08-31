import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import StoreContext, { store } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
