import { useState } from 'react';
import './header.css';
import { AiOutlineMenu } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";
import logo from '../../assets/logo.svg'


const Header = () => {


  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <section id = "nav">
      <div className="navbarrr">
        <div className="open" onClick={toggleMenu}>
          {openMenu ? <TfiClose /> : <AiOutlineMenu />}
        </div>
        <div className="navbar-content">
          <div className="image">
            <a href="#Home">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="links">
            <a href="#main">الرئيسية</a>
            <a href="#who">من نحن</a>
            <a href="#products">منتجاتنا</a>
            <a href="#services">خدماتنا</a>
            <a href="#blog">المدونة</a>
          </div>

          <div className="contact-us ">
            
            <a href="#Contact_us">تواصل معنا</a>
            
          </div>
        </div>
      </div>

      <div className="drop-down">
        {openMenu ? (
          <div className="links-drop-down">

            <a href="#Home">الرئيسية</a>
            <a href="#Services">من نحن</a>
            <a href="#About_us">منتجاتنا</a>
            <a href="#Contact_us">خدماتنا</a>
            <a href="#Contact_us">المدونة</a>

          </div>
        ) : null}
      </div>
    </section>
  );
}

export default Header
