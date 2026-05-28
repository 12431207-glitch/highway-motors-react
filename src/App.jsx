import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <nav className="navbar">
        <h2>Highway Motors</h2>
        <div>
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("cars")}>Cars</button>
          <button onClick={() => setPage("services")}>Services</button>
          <button onClick={() => setPage("about")}>About</button>
          <button onClick={() => setPage("contact")}>Contact</button>
        </div>
      </nav>

      {page === "home" && (
        <div className="page">
          <h1>Welcome to Highway Motors</h1>
          <p>Highway Motors is a car dealership website built with ReactJS.</p>
        </div>
      )}

      {page === "cars" && (
        <div className="page">
          <h1>Available Cars</h1>
          <div className="cards">
            <div className="card">Sedan - $25,000</div>
            <div className="card">SUV - $35,000</div>
            <div className="card">Sports Car - $50,000</div>
            <div className="card">Electric Car - $45,000</div>
          </div>
        </div>
      )}

      {page === "services" && (
        <div className="page">
          <h1>Our Services</h1>
          <div className="cards">
            <div className="card">Car Sales</div>
            <div className="card">Maintenance</div>
            <div className="card">Inspection</div>
            <div className="card">Customer Support</div>
          </div>
        </div>
      )}

      {page === "about" && (
        <div className="page">
          <h1>About Us</h1>
          <p>This is a responsive ReactJS frontend project for a car dealership.</p>
        </div>
      )}

      {page === "contact" && (
        <div className="page">
          <h1>Contact Us</h1>
          <p>Email: highwaymotors@gmail.com</p>
          <p>Phone: +961 70 123 456</p>
          <p>Location: Beirut, Lebanon</p>
        </div>
      )}
    </>
  );
}

export default App;