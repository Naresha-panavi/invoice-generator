import { Link } from "react-router-dom";
import "../scss/_auth.scss";

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p className="auth-text">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}
