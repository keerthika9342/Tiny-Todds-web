import { useState } from "react";
import "../styles/forgotPassword.css";

function ForgotPasswordPage() {
  const [error, setError] = useState("");

  const handleSubmit = () => {
    setError("Username and password must not be empty!");
  };

  return (
    <div className="forgot-page">

      <div className="forgot-container">

        {/* ICON */}
        <div className="icon">🔒</div>

        <h1>Forgot Password?</h1>
        <p className="subtitle">
          Don’t worry! Enter your details to recover access.
        </p>

        {/* USERNAME */}
        <input type="text" placeholder="Enter your username" />

        {/* PASSWORD */}
        <input type="password" placeholder="Last remembered password" />

        {/* ERROR */}
        {error && <p className="error">{error}</p>}

        {/* BUTTON */}
        <button onClick={handleSubmit}>Continue</button>

        {/* EXTRA OPTIONS */}
        <p className="try">
          Try another way
        </p>

      </div>

    </div>
  );
}

export default ForgotPasswordPage;