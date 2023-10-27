import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import DataVideos from "./hooks/DataVideoList";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <DataVideos>
      <App />
    </DataVideos>
  </React.Fragment>
);
