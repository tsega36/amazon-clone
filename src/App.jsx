import { useState } from 'react';
import './App.css';
import Carousel from './components/Carousel/Carousel';
import Category from './components/Category/Category';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Carousel />
      <Category />
      <Product />
    </>
  );
}

export default App;
