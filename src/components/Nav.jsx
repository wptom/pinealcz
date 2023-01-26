import React from "react";
import { Link } from "react-router-dom";

//import "../assets/scss/nav.scss";

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
            <ul>
              <li>
                <Link to="/services/marketing">Marketing a reklama</Link>
              </li>
              <li>
                <Link to="/services/management">Správa počítačových sítí</Link>
              </li>
              <li>
                <Link to="/services/systems">Inteligentní klientské systémy</Link>
              </li>
              <li>
                <Link to="/services/consulting">Účetní a daňové poradenství</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/#career">Kariéra</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
