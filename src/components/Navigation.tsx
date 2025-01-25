import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", gap: "10px", padding: "10px" }}>
      <button onClick={() => navigate("/PrivacyPolicy")}>Privacy Policy</button>
      <button onClick={() => navigate("/TermsOfService")}>
        Terms of Service
      </button>
    </div>
  );
}

export default Navigation;
