import { Route, Routes } from 'react-router-dom';
import Auth from './Pages/Auth/Auth.jsx';
import Cart from './Pages/Cart/Cart';
import Landing from './Pages/Landing/Landing';
import Orders from './Pages/Orders/Orders';
import Payment from './Pages/Payment/Payment';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Result from './Pages/Result/Result';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51SfSL34nDWyKZW9GTd5VtVahnjS1CCsArsNzcwA8ZkhP42aA0ZdDNAFdQHLjDEd5BZnmePn3K7KqZ7z5Nz0EJBAX004CVdIQCT',
);

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/category/:categoryName" element={<Result />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route
        path="/payment"
        element={
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
        }
      />
    </Routes>
  );
}

export default Routing;
