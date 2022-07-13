import React from "react";
import "./Footer.css";
import iconT from "../../asset/twitter.png";
import iconF from "../../asset/facebook.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerContainer">
          <div>Copyright &copy;2016 PT.Company</div>
          <div className="footerLogoContainer">
            <div className="footerLogo"><img src={iconF} style={{width:"50%"}} alt="icon"/></div>
            <div className="footerLogo"><img src={iconT} style={{width:"50%"}} alt="icon"/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
