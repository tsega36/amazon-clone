import { useContext } from 'react';
import { BiCart } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import styles from './Header.module.css';
import LowerHeader from './LowerHeader';

const Header = () => {
  const { state } = useContext(DataContext);
  const { basket } = state;

  const totalItems = basket.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className={styles.fixed}>
      <header className={styles.header}>
        {/* LEFT */}
        <div className={styles.headerLeft}>
          <Link to="/" className={`${styles.logo} ${styles.hoverable}`}>
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon"
            />
          </Link>

          <div className={`${styles.deliverTo} ${styles.hoverable}`}>
            <SlLocationPin size={18} />
            <div>
              <p className={styles.smallText}>Deliver to</p>
              <span className={styles.boldText}>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div className={styles.searchBox}>
          <select>
            <option>All</option>
          </select>
          <input placeholder="Search product" />
          <button className={styles.searchBtn}>
            <BsSearch size={20} />
          </button>
        </div>

        {/* RIGHT */}
        <div className={styles.headerRight}>
          <div className={`${styles.langBox} ${styles.hoverable}`}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg"
              alt="flag"
            />
            <span>EN</span>
          </div>

          <Link
            to="/auth"
            className={`${styles.headerLink} ${styles.hoverable}`}
          >
            <p className={styles.smallText}>Hello, sign in</p>
            <span className={styles.boldText}>Account & Lists</span>
          </Link>

          <Link
            to="/orders"
            className={`${styles.headerLink} ${styles.hoverable}`}
          >
            <p className={styles.smallText}>Returns</p>
            <span className={styles.boldText}>& Orders</span>
          </Link>

          <Link to="/cart" className={`${styles.cart} ${styles.hoverable}`}>
            <BiCart size={32} />
            <span className={styles.cartCount}>{totalItems}</span>
            <p>Cart</p>
          </Link>
        </div>
      </header>

      <LowerHeader />
    </div>
  );
};

export default Header;
