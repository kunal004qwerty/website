import React, { useState } from "react";

import "../Style/header.scss";
import { BiMenu, BiSearch } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MenuData } from "./MenuData.js";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const showMenu = () => {
    setShow(!show);
  };

  return (
    <div className="header">
      <div className="navbar">
        <div className="left">
          <BiMenu className="menu-icon" onClick={showMenu} />
          <div className="shop-arrow">
            <button>Shop</button>
            <AiOutlineArrowRight className="Header_Arrow_Icon" />
          </div>
        </div>

        <div className="center">
          <h1>LOGO</h1>
        </div>

        <div className="right">
          <BiSearch />
          <button>Cart</button>
        </div>
      </div>

      <nav className={show ? "nav-item active" : "nav-item"}>
        <ul onClick={showMenu}>
          {MenuData.map((item, index) => {
            return (
              <li key={index} className={item.ClassNames}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
