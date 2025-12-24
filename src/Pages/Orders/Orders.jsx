import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../components/DataProvider/DataProvider';
import Layout from '../../components/Layout/Layout';
import ProductCard from '../../components/Product/ProductCard';
import { db } from '../../Utility/firebase';
import styles from './Orders.module.css';

function Orders() {
  // Access global state and get the user
  const { state } = useContext(DataContext);
  const { user } = state;

  // Local state to hold orders fetched from Firestore
  const [orders, setOrders] = useState([]);

  // useEffect to fetch orders whenever the user changes
  useEffect(() => {
    if (!user) return; // If no user is logged in, do nothing

    // Create reference to the user's orders collection in Firestore
    const ordersRef = collection(db, 'users', user.uid, 'orders');

    // Create a query to order the documents by 'created' timestamp descending
    const q = query(ordersRef, orderBy('created', 'desc'));

    // Listen in real-time to changes in the orders collection
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setOrders(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })),
      );
    });

    // Cleanup function to unsubscribe from the snapshot listener
    return () => unsubscribe();
  }, [user]); // Re-run effect if user changes

  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.orders_container}>
          <h2>Your Orders</h2>

          {/* Show message if no orders exist */}
          {orders.length === 0 && <div>You don't have orders yet.</div>}

          {/* Map through all orders */}
          {orders.map((eachOrder) => (
            <div key={eachOrder.id}>
              <hr />
              <p>Order Id: {eachOrder.id}</p>

              {/* Map through each product in the basket of the order */}
              {eachOrder.data.basket?.map((order) => (
                <ProductCard key={order.id} flex product={order} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Orders;
