import { useContext } from 'react';
import { DataContext } from '../../components/DataProvider/DataProvider';
import Layout from '../../components/Layout/Layout';
import ProductCard from '../../components/Product/ProductCard';

function Cart() {
  const { state, dispatch } = useContext(DataContext);
  const { basket, user } = state;

  return (
    <Layout>
      <div>
        <h2>Hello {user?.name || ''}</h2>
        <h3>Your shopping basket</h3>
        <hr />
        {basket?.length === 0 ? (
          <p>Oops! No item in your cart</p>
        ) : (
          basket?.map((item, i) => (
            <ProductCard key={i} product={item} renderDesc={true} flex={true} />
          ))
        )}
      </div>
    </Layout>
  );
}

export default Cart;
