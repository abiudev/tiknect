import "./App.css";
import { Routes, Route } from "react-router-dom";
import ComingSoon from "./components/comingSoon";
import { TermsOfService } from "./components/TOS";
import { PrivacyPolicy } from "./components/privacyPolicy";
import Tik from "./components/tik";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/tik" element={<Tik />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
      </Routes>
    </>
  );
}

export default App;
