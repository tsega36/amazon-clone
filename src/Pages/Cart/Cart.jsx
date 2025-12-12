import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CurrencyFormat from '../../components/CurrencyFormat/CurrencyFormat';
import { DataContext } from '../../components/DataProvider/DataProvider';
import Layout from '../../components/Layout/Layout';
import ProductCard from '../../components/Product/ProductCard';
import './Cart.css';

function Cart() {
  const { state, dispatch } = useContext(DataContext);
  const { basket, user } = state;

  const total = basket.reduce((amount, item) => amount + item.price, 0);

  return (
    <Layout>
      <section className="container">
        <div className="cart-container">
          <h2>Hello {user?.name || ''}</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {basket?.length === 0 ? (
            <p>Oops! No item in your cart</p>
          ) : (
            basket.map((item, index) => (
              <ProductCard
                key={index}
                product={item}
                renderDesc={true}
                renderAdd={false}
                flex={true}
              />
            ))
          )}
        </div>

        {basket?.length !== 0 && (
          <div className="subtotal">
            <div>
              <p>Subtotal ({basket.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>

            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>

            <Link to="/payments" className="checkout-btn">
              Proceed to Checkout
            </Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
