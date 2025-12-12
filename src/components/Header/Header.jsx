import { useContext } from 'react';
import { BiCart } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import './header.css';
import LowerHeader from './LowerHeader';

const Header = () => {
  const { state, dispatch } = useContext(DataContext);
  const { basket } = state;
  const totalItems = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <div className="fixed">
      <header className="header">
        {/* LEFT AREA */}
        <div className="header-left">
          {/* Logo */}
          <Link to="/" className="logo">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
            />
          </Link>

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
          <Link to="/auth" className="header-link">
            <p className="small-text">Hello, sign in</p>
            <span className="bold-text">Account & Lists</span>
          </Link>

          {/* Orders */}
          <Link to="/orders" className="header-link">
            <p className="small-text">Returns</p>
            <span className="bold-text">& Orders</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="cart">
            <BiCart size={32} />
            <span className="cart-count">{totalItems}</span>
            <p>Cart</p>
          </Link>
        </div>
      </header>

      <LowerHeader />
    </div>
  );
};

export default Header;
