import { useState } from "react";
import "./App.css";

import car1 from "./assets/car1.jpg";
import car2 from "./assets/car2.jpg";
import car3 from "./assets/car3.jpg";
import car4 from "./assets/car4.jpg";

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
          <p>Highway Motors is a ReactJS car dealership website.</p>
          <img className="hero-img" src={car1} alt="Car dealership" />
        </div>
      )}

      {page === "cars" && (
        <div className="page">
          <h1>Available Cars</h1>

          <div className="cards">
            <div className="card">
              <img src={car1} alt="Sedan" />
              <h3>Sedan</h3>
              <p>$25,000</p>
            </div>

            <div className="card">
              <img src={car2} alt="SUV" />
              <h3>SUV</h3>
              <p>$35,000</p>
            </div>

            <div className="card">
              <img src={car3} alt="Sports Car" />
              <h3>Sports Car</h3>
              <p>$50,000</p>
            </div>

            <div className="card">
              <img src={car4} alt="Electric Car" />
              <h3>Electric Car</h3>
              <p>$45,000</p>
            </div>
          </div>
        </div>
      )}

      {page === "services" && (
        <div className="page">
          <h1>Our Services</h1>

          <div className="cards">
            <div className="card">
              <h3>Car Sales</h3>
              <p>We sell different types of cars.</p>
            </div>

            <div className="card">
              <h3>Maintenance</h3>
              <p>We provide basic car maintenance.</p>
            </div>

            <div className="card">
              <h3>Inspection</h3>
              <p>We inspect cars before selling them.</p>
            </div>

            <div className="card">
              <h3>Customer Support</h3>
              <p>We help customers choose the right car.</p>
            </div>
          </div>
        </div>
      )}

      {page === "about" && (
        <div className="page">
          <h1>About Us</h1>
          <p>
            Highway Motors is a responsive frontend web application created
            using ReactJS for a car dealership project.
          </p>
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