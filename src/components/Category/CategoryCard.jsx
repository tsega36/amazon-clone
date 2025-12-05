import React from "react";
import "./category.css";

function CategoryCard({ data }) {
  return (
    <div className="category-container">
      <a href="#">
        <h2>{data.title}</h2>
        <img src={data.image} alt={data.title} />
        <p>Shop Now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
