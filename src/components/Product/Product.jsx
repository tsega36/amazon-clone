import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    }

    loadProducts();
  }, []);

  return (
    <div className="product-list">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          title={item.title}
          image={item.image}
          rating={item.rating.rate}
          ratingCount={item.rating.count}
          price={item.price}
          link={`/product/${item.id}`}
        />
      ))}
    </div>
  );
}

export default Product;
