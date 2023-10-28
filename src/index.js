import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from "./App";
import DataVideos from "./hooks/DataVideoList";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.Fragment>
    <DataVideos>
      <App />
    </DataVideos>
  </React.Fragment>
);
