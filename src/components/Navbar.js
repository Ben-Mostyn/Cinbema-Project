import React from "react";
import "../css/nav.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home.js";
import DisplayFilmList from "./DisplayFilmList";
import SignIn from "./SignIn";

const Navbar = () => {
  return (
    <Router>
      <nav className="navBar">
        <Link className="LinkClass" to="/">
          Home
        </Link>
        <Link className="LinkClass" to="/WhatsOn">
          Whats On
        </Link>
        <Link className="LinkClass" to="/SignIn">
          Sign-in
        </Link>
        <Link className="LinkClass">Your Visit</Link>
        <Link className="LinkClass">Book Tickets</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WhatsOn" element={<DisplayFilmList />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
