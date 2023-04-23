import React from "react";
import "./footer.css";
import fundLogo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="fund__footer section__padding">

      <div className="fund__footer-links">
        <div className="fund__footer-links_logo">
          <img src={fundLogo} alt="logo" />
        </div>
        <div className="fund__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="fund__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="fund__footer-links_div">
          <h4>Get in touch</h4>
      
          <p>crowdnuru@info.io</p>
        </div>
      </div>

      <div className="fund__footer-copyright">
        <p>© 2023 CrowdNuru. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
