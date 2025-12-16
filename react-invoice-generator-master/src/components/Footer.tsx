import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div>
          <h3>About</h3>
          <p>
            Invoice Generator helps you create professional invoices quickly and
            easily. Perfect for freelancers and small businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
          <Link to="/feedback">Feedback</Link>
        </div>

        {/* Contact Info */}
        <div>
          <h3>Contact</h3>
          <p>Email: support@invoicegen.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Bangalore, India</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Invoice Generator. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
