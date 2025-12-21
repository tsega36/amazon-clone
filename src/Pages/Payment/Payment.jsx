import { useContext, useState } from 'react';
import { DataContext } from '../../components/DataProvider/DataProvider';
import Layout from '../../components/Layout/Layout';
import ProductCard from '../../components/Product/ProductCard';
import styles from './Payment.module.css';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';

function Payment() {
  const [{ basket, user }] = useContext(DataContext);

  const total =
    basket?.reduce((amount, item) => item.price * item.amount + amount, 0) || 0;
  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);

  const [cardError, setCardError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (e) => {
    setCardError(e?.error?.message || '');
  };

  return (
    <Layout>
      {/* header */}
      <div className={styles.payment_header}>Checkout {totalItem} items</div>

      <section className={styles.payment}>
        {/* address */}
        <div className={styles.flex}>
          <h3>Delivery address</h3>
          <div>{user?.email || 'No email available'}</div>
        </div>
        <hr />

        {/* product */}
        <div className={styles.flex}>
          <h3>Review items and delivery</h3>
          <div>
            {basket?.map((item, index) => (
              <ProductCard key={index} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        {/* card form */}
        <div className={styles.flex}>
          <h3>Payment methods</h3>
          <div className={styles.payment_card_container}>
            <div className={styles.payment_details}>
              <form action="">
                {/* error */}
                {cardError && (
                  <small style={{ color: 'red' }}>{cardError}</small>
                )}
                {/* card element */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={styles.payment_price}>
                  <div>
                    <span style={{ display: 'flex' }}>
                      <p>Total Order |</p>
                      <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
