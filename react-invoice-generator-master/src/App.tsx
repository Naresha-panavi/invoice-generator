import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/ContactUs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Feedback from "./pages/Feedback";
import Footer from "./components/Footer";
import GeneratorPage from "./GeneratorPage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main style={{ minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/generator" element={<GeneratorPage />} /> 
          </Routes>
        </main>

        {/* Footer (always visible) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
