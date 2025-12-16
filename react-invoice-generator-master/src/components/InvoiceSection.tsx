import { Link } from "react-router-dom"
import '../scss/_invoiceSection.scss';
const InvoiceSection = () => {
  return (
    <section className="invoice-section">
      <h2>Invoice Generator</h2>
      <p>
        Create <strong>professional invoices</strong> in just a few clicks. 
        Our tool is easy to use, secure, and helps you save time managing your business billing.
      </p>

      <div className="features">
        <div className="feature-card">
          <div className="feature-icon" style={{ background: "#dbeafe", color: "#2563eb" }}>📄</div>
          <h3>Simple & Fast</h3>
          <p>Generate invoices instantly with minimal effort and maximum accuracy.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon" style={{ background: "#dcfce7", color: "#16a34a" }}>✅</div>
          <h3>Professional</h3>
          <p>Impress clients with clean, professional invoices that reflect your brand.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon" style={{ background: "#ede9fe", color: "#1e293b" }}>⏰</div>
          <h3>Save Time</h3>
          <p>Focus on your work while we simplify your billing process.</p>
        </div>
      </div>

      <Link to="/generator" className="invoice-btn">
        🚀 Go to Invoice Generator
      </Link>
    </section>
  )
}

export default InvoiceSection
