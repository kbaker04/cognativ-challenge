import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import configureStore from "./redux/configureStore";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const store = configureStore();

render(
  <Router>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </Router>,
  document.getElementById("root")
);
