import { Route, Routes } from 'react-router-dom'; // NO BrowserRouter here
import SignIn from './Pages/Auth/SignUp';
import Cart from './Pages/Cart/Cart';
import Landing from './Pages/Landing/Landing';
import Orders from './Pages/Orders/Orders';
import Payment from './Pages/Payment/Payment';

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth" element={<SignIn />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payments" element={<Payment />} />
      </Routes>
    </>
  );
}

export default Routing;
