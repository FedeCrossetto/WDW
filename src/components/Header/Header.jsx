import React from "react";
import { logo, iconHamburguer ,heroBg} from '../../assets/images';
// import {Button} from '../Button/Button';
import { Button as BootstrapButton, ButtonProps as BootstrapButtonProps } from 'react-bootstrap';

import './header.scss';
import Banner from "../Banner/Banner";

const Header = () => {
    return ( 
     <div className="container header">
      <div className="header__inner container">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <img src={iconHamburguer} alt="Menú Mobile" className="header__hamburguer " />
        <button type="button" className="header__btn btn btn-custom"> LOGIN </button>
      </div>
      <Banner />
    </div>
    );
}
 
export default Header;