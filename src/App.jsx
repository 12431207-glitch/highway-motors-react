import { useState } from "react";
import "./App.css";

import indexImg from "./assets/indeximg.jpeg";
import mercedes from "./assets/mercedes.jpeg";
import audi from "./assets/audi.jpeg";
import suv from "./assets/suvimg.jpeg";
import sports from "./assets/sc.jpeg";
import tesla from "./assets/tesla.jpeg";

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
          <img className="hero-img" src={indexImg} alt="Highway Motors" />
        </div>
      )}

      {page === "cars" && (
        <div className="page">
          <h1>Available Cars</h1>

          <div className="cards">
            <div className="card">
              <img src={mercedes} alt="Mercedes" />
              <h3>Mercedes</h3>
              <p>$40,000</p>
            </div>

            <div className="card">
              <img src={audi} alt="Audi" />
              <h3>Audi</h3>
              <p>$35,000</p>
            </div>

            <div className="card">
              <img src={suv} alt="SUV" />
              <h3>SUV</h3>
              <p>$38,000</p>
            </div>

            <div className="card">
              <img src={sports} alt="Sports Car" />
              <h3>Sports Car</h3>
              <p>$50,000</p>
            </div>

            <div className="card">
              <img src={tesla} alt="Tesla" />
              <h3>Tesla</h3>
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