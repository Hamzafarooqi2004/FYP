// Footer.js

import React from 'react';
import './Footer.css'; // Import your styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="demo">
        <div className="subscribe-to-our">
          Subscribe to our
          <br />
          Newsletter
        </div>
        <button className="button-demo">
          <div className="subscribe-wrapper">
            <div className="subscribe">SUBSCRIBE</div>
          </div>
        </button>
      </div>
      <div className="footer-links">
        <p className="text-wrapper-20">© 2021 Virtual Art Gallery. All rights reserved</p>
        <div className="footer-links-2">
          <div className="links">
            <div className="text-wrapper-21">Links</div>
            <div className="text-wrapper-22">Overons</div>
            <div className="text-wrapper-23">Social Media</div>
            <div className="text-wrapper-24">Counters</div>
            <div className="text-wrapper-25">Contact</div>
          </div>
          <div className="company">
            <div className="terms-conditions">Terms &amp; Conditions</div>
            <div className="text-wrapper-26">Privacy Policy</div>
            <div className="text-wrapper-27">Contact</div>
            <div className="text-wrapper-28">Company</div>
          </div>
          <div className="get-in-touch">
            <p className="text-wrapper-29">Crechterwoord K12 182 DK Alknjkcb</p>
            <div className="text-wrapper-30">085-132567</div>
            <div className="text-wrapper-31">info@lobar.net</div>
            <div className="text-wrapper-32">Get in touch</div>
          </div>
          <div className="footer-links-3">
            <p className="text-wrapper-33">Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
            <div className="logo">Virtual Art Gallery</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
