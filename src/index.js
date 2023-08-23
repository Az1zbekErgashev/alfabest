import React, { useEffect, useContext } from "react";
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
import Career from "./Components/Career/Career";
import Purchase from "./Components/Purchases/Purchase";
import Coopertion from "./Components/Сooperation/Coopertion";
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(
        <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider value={{}} >
        <Routes>
          <Route path='/' element={<App />}>
            <Route index path='/' element={<Home />} />
            <Route  path='/about' element={<AboutCompany />} />
            <Route  path='/carrier' element={<Career />} />
            <Route  path='/purchase' element={<Purchase />} />
            <Route  path='/cooperation' element={<Coopertion />}/>
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

