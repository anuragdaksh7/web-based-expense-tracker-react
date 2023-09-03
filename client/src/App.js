import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
// import { About } from "./pages/About";
import { HeadComp } from "./components/HeadComponent";
import { LandingPage } from "./pages/landingPage";
import { LogInPage } from "./pages/LogInPage";
import { SignUpPage } from "./pages/signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeadComp />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
