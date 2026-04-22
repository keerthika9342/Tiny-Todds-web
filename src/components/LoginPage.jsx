import { useState } from "react";
import "../styles/loginPage.css";
import { Link } from "react-router-dom";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">

      <div className="login-container">

        <h1>Welcome Back</h1>
        <p className="subtitle">Login to continue your journey</p>

        {/* USERNAME */}
        <label>User Name</label>
        <input type="text" placeholder="Enter User Name" />

        {/* PASSWORD */}
        <label>Password</label>
        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
          />

          <span
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            
          </span>
        </div>

        {/* BUTTON */}
        <button className="login-btn">Sign In</button>

        {/* FORGOT */}
        <Link to="/forgot-password" className="forgot">
          Forgot Password?
        </Link>

      </div>

    </div>
  );
}

export default LoginPage;