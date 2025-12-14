import { AiOutlineMenu } from 'react-icons/ai';
import styles from './Header.module.css';

const LowerHeader = () => {
  return (
    <div className={styles.lowerHeader}>
      <ul>
        <li className={styles.hoverable}>
          <AiOutlineMenu />
          <p>All</p>
        </li>
        <li className={styles.hoverable}>
          <a href="/">Today's Deals</a>
        </li>
        <li className={styles.hoverable}>
          <a href="/">Prime Video</a>
        </li>
        <li className={styles.hoverable}>
          <a href="/">Registry</a>
        </li>
        <li className={styles.hoverable}>
          <a href="/">Gift Cards</a>
        </li>
        <li className={styles.hoverable}>
          <a href="/">Customer Service</a>
        </li>
        <li className={styles.hoverable}>
          <a href="/">Sell</a>
        </li>
      </ul>
    </div>
  );
};

export default LowerHeader;
