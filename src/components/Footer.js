import React from "react";
import "../css/footer.css";

import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <h3>Socials</h3>
          <div className="footer-icon-container">
            <li>
              <i className="fa-brands fa-tiktok">
                <BsInstagram />
              </i>
            </li>
            <li>
              <i className="">
                <FaTiktok />
              </i>
            </li>
          </div>
        </div>

        <div className="footer-item">
          <h3>Company</h3>
          <ul>
            <a href="#about-container">
              <li>About</li>
            </a>
            <a href="#contact-information-container">
              <li>Contact Us</li>

              <li>Reviews</li>

              <li>Leave a Review</li>
            </a>
          </ul>
        </div>
        <div className="footer-item">
          <h3>Got a Question?</h3>
          <ul>
            <li>
              Ask it <span>HERE</span>
            </li>
            <li>
              Or check our FAQ's <span>HERE</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
