import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import AppWrapper from "./hoc/AppWrapper";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper>
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    </AppWrapper>
  </React.StrictMode>
);
