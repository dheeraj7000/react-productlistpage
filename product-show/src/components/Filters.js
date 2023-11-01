import React from "react";

const Filters = ({ categories, category, onCategoryChange, priceSort, onPriceSortChange }) => {
  return (
    <div className="filters">
      <label htmlFor="category-filter">Category:</label>
      <select id="category-filter" onChange={onCategoryChange} value={category}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <label htmlFor="price-filter">Price:</label>
      <select id="price-filter" onChange={onPriceSortChange} value={priceSort}>
        <option value="low-to-high">Low to High</option>
        <option value="high-to-low">High to Low</option>
      </select>
    </div>
  );
};

export default Filters;
