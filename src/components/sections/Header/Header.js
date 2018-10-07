import React from "react";

import logo from "../../../assets/img/logo.png";
import logobbc from "../../../assets/img/logo-bbc.png";
import logoforbes from "../../../assets/img/logo-forbes.png";
import logotechcrunch from "../../../assets/img/logo-techcrunch.png";
import logobi from "../../../assets/img/logo-bi.png";

const Header = () => (
  <header className="header">
    <img src={logo} alt="Nexter logo" className="header__logo" />
    <h3 className="heading-3">Your own home:</h3>
    <h1 className="heading-1">The ultimate personal freedom</h1>
    <button className="btn header__btn">View our properties</button>
    <div className="header__seenon-text">Seen on</div>
    <div className="header__seenon-logos">
      <img src={logobbc} alt="Seen on BBC logo" />
      <img src={logoforbes} alt="Seen on Forbes logo" />
      <img src={logotechcrunch} alt="Seen on TechCrunch logo" />
      <img src={logobi} alt="Seen on Business Insider logo" />
    </div>
  </header>
);

export default Header;
