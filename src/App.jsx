import { useState } from "react";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import "./App.css";
import Category from "./components/Category/Category";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Carousel />
      <Category/>
    </>
  );
}

export default App;
