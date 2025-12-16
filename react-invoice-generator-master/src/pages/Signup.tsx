import { Link } from "react-router-dom";
import "../scss/_auth.scss";

export default function Signup() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
        <p className="auth-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  )
}