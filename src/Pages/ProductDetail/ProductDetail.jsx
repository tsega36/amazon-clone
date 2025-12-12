import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productUrl } from '../../api/endpoints';
import Layout from '../../components/Layout/Layout';
import Loader from '../../components/Loader/Loader';
import ProductCard from '../../components/Product/ProductCard';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [productId]);

  if (!product && isLoading) return <Loader />;

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          key={product.id}
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </Layout>
  );
}

export default ProductDetail;
