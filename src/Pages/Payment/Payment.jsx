import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../api/axios';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import { DataContext } from '../../components/DataProvider/DataProvider';
import Layout from '../../components/Layout/Layout';
import Loader from '../../components/Loader/Loader';
import ProductCard from '../../components/Product/ProductCard';
import { db } from '../../Utility/firebase';
import styles from './Payment.module.css';

function Payment() {
  const { state, dispatch } = useContext(DataContext);
  const { basket, user } = state;

  const total =
    basket?.reduce((amount, item) => item.price * item.amount + amount, 0) || 0;
  const totalItem = basket?.reduce((amount, item) => item.amount + amount, 0);

  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCardError(e?.error?.message || '');
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setCardError(null);

    try {
      // 1. Get clientSecret from backend
      const response = await axiosInstance.post(
        `/payment/create?total=${total}`,
      );
      const clientSecret = response.data.clientSecret;

      // 2. Confirm card payment
      const cardElement = elements.getElement(CardElement);
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: { card: cardElement },
        },
      );

      if (error) {
        setCardError(error.message || 'Payment failed.');
        setProcessing(false);
        return;
      }

      // 3. Payment succeeded: save to Firestore
      if (paymentIntent.status === 'succeeded') {
        const ordersRef = doc(
          collection(db, 'users', user.uid, 'orders'),
          paymentIntent.id,
        );
        await setDoc(ordersRef, {
          basket: basket,
          amount: paymentIntent.amount,
          created: serverTimestamp(),
        });
        // Redirect to Orders page
        navigate('/orders', { state: { msg: ' You have placed order ' } });
      }
      // Clear basket
      dispatch({ type: 'EMPTY_BASKET' });

      setProcessing(false);
    } catch (err) {
      console.error('Payment request error:', err);
      setCardError('Payment failed. Please try again.');
      setProcessing(false);
    }
  };

  return (
    <Layout>
      <div className={styles.payment_header}>Checkout {totalItem} items</div>

      <section className={styles.payment}>
        <div className={styles.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email || 'No email available'}</div>
            <div>Addis Ababa, Ethiopia</div>
          </div>
        </div>
        <hr />

        <div className={styles.flex}>
          <h3>Review Items and Delivery</h3>
          <div>
            {basket?.map((item, index) => (
              <ProductCard key={index} product={item} flex />
            ))}
          </div>
        </div>
        <hr />

        <div className={styles.flex}>
          <h3>Payment Method</h3>
          <div className={styles.payment_card_container}>
            <div className={styles.payment_details}>
              <form onSubmit={handlePayment}>
                {cardError && (
                  <small style={{ color: 'red' }}>{cardError}</small>
                )}

                <CardElement onChange={handleChange} />

                <div className={styles.payment_price}>
                  <div>
                    <span style={{ display: 'flex' }}>
                      <p>Total Order |</p>
                      <CurrencyFormat amount={total} />
                    </span>
                  </div>

                  <button type="submit" disabled={!stripe || processing}>
                    {processing ? (
                      <div className={styles.loading}>
                        <Loader style={{ width: '20px', height: '20px' }} />
                        <span>Please Wait ..</span>
                      </div>
                    ) : (
                      'Pay Now'
                    )}
                  </button>
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
