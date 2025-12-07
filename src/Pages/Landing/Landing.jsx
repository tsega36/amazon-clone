import Carousel from '../../components/Carousel/Carousel.jsx';
import Category from '../../components/Category/Category.jsx';
import Layout from '../../components/Layout/Layout';
import Product from '../../components/Product/Product.jsx';
function Landing() {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
    </Layout>
  )
}

export default Landing;
