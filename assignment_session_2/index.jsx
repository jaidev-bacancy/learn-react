import React from "react";
import ReactDOM from "react-dom/client";
import MakePerson from "./components_assignment/MakePerson";
import UserViewer from "./components_assignment/UserViewer";
import Timer from "./src/Timer";
import WindowResize from "./components_assignment/WindowResize";
import FocusElement from "./components_assignment/FocusElement.jsx";
import DifferentStateLogic from "./components_assignment/DifferentStateLogic.jsx";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* <MakePerson /> */}
    {/* <UserViewer /> */}
    {/* <Timer /> */}
    {/* <WindowResize /> */}
    {/* <FocusElement /> */}
    <DifferentStateLogic />
  </React.StrictMode>
);
