import "./index.css";
import React from "react";
import ReactDOM from "react-dom";

// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Comp
import App from "./App";

// Utils
import disableScroll from "disable-scroll";

// disableScroll.on();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
