import "./App.css";
import { useNavigate, Routes, Route } from "react-router-dom";
import ComingSoon from "./components/comingSoon";
import { TermsOfService } from "./components/TOS";
import { PrivacyPolicy } from "./components/privacyPolicy";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/PrivacyPolicy");
          }}
        >
          Privacy Policy
        </a>
      </div>
      <div>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/TermsOfService");
          }}
        >
          Terms of Service
        </a>
      </div>

      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
      </Routes>
    </>
  );
}

export default App;
