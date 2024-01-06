import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { HeadComp } from "./components/HeadComponent";
import { LandingPage } from "./pages/landingPage";
import { LogInPage } from "./pages/LogInPage";
import { SignUpPage } from "./pages/signup";
import { AddExp } from "./pages/AddExp";
import { AllExp } from "./pages/AllExp";
// import { useState } from "react";
// import { MonthlyExp } from "./components/MonthlyExpenseOverview";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addexpense" element={<AddExp />} />
          <Route path="/allexps" element={<AllExp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
