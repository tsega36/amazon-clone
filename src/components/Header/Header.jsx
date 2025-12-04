import React from "react";
import "./header.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
      <header className="header">
        {/* LEFT AREA */}
        <div className="header-left">
          {/* Logo */}
          <a href="/" className="logo">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </a>

          {/* Deliver To */}
          <div className="deliver-to">
            <SlLocationPin className="location-icon" size={18} />
            <div>
              <p className="small-text">Deliver to</p>
              <span className="bold-text">Ethiopia</span>
            </div>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="search-box">
          <select>
            <option value="">All</option>
          </select>

          <input type="text" placeholder="Search product" />

          <button className="search-btn">
            <BsSearch size={20} />
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="header-right">
          {/* Language */}
          <div className="lang-box">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg"
              alt="flag"
            />
            <span>EN</span>
          </div>

          {/* Sign In */}
          <a href="/" className="header-link">
            <p className="small-text">Hello, sign in</p>
            <span className="bold-text">Account & Lists</span>
          </a>

          {/* Orders */}
          <a href="/" className="header-link">
            <p className="small-text">Returns</p>
            <span className="bold-text">& Orders</span>
          </a>

          {/* Cart */}
          <a href="/" className="cart">
            <BiCart size={32} />
            <span className="cart-count">0</span>
          </a>
        </div>
      </header>

      <LowerHeader />
    </>
  );
};

export default Header;
