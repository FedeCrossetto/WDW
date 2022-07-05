import React from "react";
import { logo2, reserved } from "../../assets/images";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__line"></div>
      <div className="footer__line2">
        <img src={logo2} className="footer__item1" alt="Logo" />
        <img src={reserved} className="footer__item2" alt="Logo" />
      </div>
    </div>
  );
};
export default Footer;
