import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute.jsx';
import Auth from './Pages/Auth/Auth.jsx';
import Cart from './Pages/Cart/Cart';
import Landing from './Pages/Landing/Landing';
import Orders from './Pages/Orders/Orders';
import Payment from './Pages/Payment/Payment';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Result from './Pages/Result/Result';

const stripePromise = loadStripe(
  'pk_test_51SfSL34nDWyKZW9GTd5VtVahnjS1CCsArsNzcwA8ZkhP42aA0ZdDNAFdQHLjDEd5BZnmePn3K7KqZ7z5Nz0EJBAX004CVdIQCT',
);

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/auth" element={<Auth />} />
      <Route
        path="/orders"
        element={
          <ProtectedRoute
            msg={'you must log in to access  your orders'}
            redirect={'/orders'}
          >
            <Orders />
          </ProtectedRoute>
        }
      />
      <Route path="/category/:categoryName" element={<Result />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route
        path="/payment"
        element={
          <ProtectedRoute msg={'you must log in to pay'} redirect={'/payments'}>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default Routing;
