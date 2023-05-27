import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'typeface-roboto';
import 'typeface-montserrat';
import { BrowserRouter } from "react-router-dom";
import Modal from 'react-modal';
Modal.setAppElement('#root');

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);