import React from "react";
import { logo, iconHamburguer} from '../../assets/images';


import './header.scss';
import Banner from "../Banner/Banner";

const Header = () => {
    return ( 
     <div className="header">
      <div className="header__inner container">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        <img src={iconHamburguer} alt="Menú Mobile" className="header__hamburguer " />
        </div>
        <button type="button" className="header__btn btn btn-custom"> LOGIN </button>
      </div>
      <Banner />
    </div>
    );
}
 
export default Header;