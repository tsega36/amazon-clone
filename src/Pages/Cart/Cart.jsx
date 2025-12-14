import { useContext } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import { DataContext } from '../../components/DataProvider/DataProvider';
import Layout from '../../components/Layout/Layout';
import ProductCard from '../../components/Product/ProductCard';
import { Type } from '../../utility/action.type';
import styles from './Cart.module.css';

function Cart() {
  const { state, dispatch } = useContext(DataContext);
  const { basket, user } = state;
  const totalItems = basket.reduce((sum, item) => sum + item.amount, 0);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);
  const increment = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };
  const decrement = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };
  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.cartContainer}>
          <h2>Hello {user?.name || ''}</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {basket?.length === 0 ? (
            <p>Oops! No item in your cart</p>
          ) : (
            basket.map((item) => (
              <section className={styles.cartProduct} key={item.id}>
                <ProductCard
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
                <div className={styles.btnContainer}>
                  <button
                    className={styles.btn}
                    onClick={() => increment(item)}
                  >
                    <IoIosArrowUp size={30} />
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={styles.btn}
                    onClick={() => decrement(item.id)}
                  >
                    <IoIosArrowDown size={30} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={styles.subtotal}>
            <div className={styles.subtotalContent}>
              <p>Subtotal ({totalItems} items)</p>
              <CurrencyFormat amount={total} />
            </div>

            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>

            <Link to="/payments" className={styles.checkoutBtn}>
              Proceed to Checkout
            </Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
