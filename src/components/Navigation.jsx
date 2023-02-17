import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  let [classNameMenu, setClassNameMenu] = useState("");
  let [classNameSubmenu, setClassNameSubmenu] = useState("");

  const toggleMenu = () => {
    if (getViewportWidth() < 992) {
      setClassNameMenu(classNameMenu === ""
        ? " nav--is-visible"
        : "");
    } else {
      setClassNameMenu(classNameMenu = "");
      setClassNameSubmenu(classNameSubmenu = "");
    }
  };

  const toggleSubMenu = () => {
    setClassNameSubmenu(classNameSubmenu === "" ? " nav__list__item--submenu-is-visible" : "");
  };

  const showSubmenu = () => {
    setClassNameSubmenu(classNameSubmenu = " nav__list__item--submenu-is-visible");
  }

  const hideSubmenu = () => {
    setClassNameSubmenu(classNameSubmenu = "");
  }

  const getViewportWidth = () => {
    return window.innerWidth;
  }

  return (
    <>
      <nav className={'nav' + classNameMenu}>
        <ul className={'nav__list'}>
          <li className={'nav__list__item'}>
            <Link to="/" className={'nav__list__item__link'} onClick={toggleMenu}>Home</Link>
          </li>
          <li className={'nav__list__item nav__list__item--has-submenu' + classNameSubmenu} onMouseEnter={showSubmenu}  onMouseLeave={hideSubmenu}>
            <Link to="/services" className={'nav__list__item__link'}>Služby</Link>
            <span onClick={toggleSubMenu} className={'nav__list__item__btn'}>Toggle submenu</span>
            <ul className={'nav__list__submenu'}>
              <li className={'nav__list__item'}>
                <Link to="/services/marketing" className={'nav__list__item__link'} onClick={toggleMenu}>Marketing a reklama</Link>
              </li>
              <li className={'nav__list__item'}>
                <Link to="/services/management" className={'nav__list__item__link'} onClick={toggleMenu}>Správa počítačových sítí</Link>
              </li>
              <li className={'nav__list__item'}>
                <Link to="/services/systems" className={'nav__list__item__link'} onClick={toggleMenu}>Inteligentní klientské systémy</Link>
              </li>
              <li className={'nav__list__item'}>
                <Link to="/services/consulting" className={'nav__list__item__link'} onClick={toggleMenu}>Účetní a daňové poradenství</Link>
              </li>
            </ul>
          </li>
          <li className={'nav__list__item'}>
            <Link to="/" className={'nav__list__item__link'} onClick={toggleMenu}>O nás</Link>
          </li>
          <li className={'nav__list__item'}>
            <Link to="/career" className={'nav__list__item__link'} onClick={toggleMenu}>Kariéra</Link>
          </li>
          <li className={'nav__list__item'}>
            <Link to="/" className={'nav__list__item__link'} onClick={toggleMenu}>Kontakt</Link>
          </li>
        </ul>
      </nav>
      <button id="toggle-menu" className={'toggle-menu'} onClick={toggleMenu}>Toggle Menu</button>
    </>
  );
}

export default Navigation;
