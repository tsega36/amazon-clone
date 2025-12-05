import React from "react";
import { categories } from "./categoryData";
import CategoryCard from "./CategoryCard";
import "./category.css";

const Category = () => {
  return (
    <div className="category-wrapper">
      {categories.map((item) => (
        <CategoryCard key={item.name} data={item} />
      ))}
    </div>
  );
};

export default Category;
