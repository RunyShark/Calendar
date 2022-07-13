import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { CalendarApp, store } from "./index";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <CalendarApp />
    </React.StrictMode>
  </Provider>
);
