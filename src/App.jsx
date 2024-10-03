import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./app/header/Navbar";
import HomePage from "./pages/HomePage";
import "@/App.css";
// import AboutPage from "./pages/AboutPage"; // Example additional page
// import ContactPage from "./pages/ContactPage"; // Example additional page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
