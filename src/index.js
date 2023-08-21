import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import Home from "./Components/Home/Home";
import AboutCompany from "./Components/AboutCompany/About";
import { LanguageProvider } from "./Components/useContext/LanguageContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
// const SavedPage = localStorage.getItem('savedPage')

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index path="/" element={<Home />} />
            <Route index path="/about" element={<AboutCompany />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
