import React, { useState, useEffect } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import { products, categories } from "./db";



function App() {
  const [category, setCategory] = useState("All");
  const [priceSort, setPriceSort] = useState("low-to-high");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;


  useEffect(() => {
    setCurrentPage(1);
  }, [category, priceSort]);

  const filteredProducts = products
    .filter((product) => category === "All" || product.category === category)
    .sort((a, b) => {
      if (priceSort === "low-to-high") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredProducts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="App">
      <h1>Product List</h1>
      <Filters
        categories={categories}
        category={category}
        onCategoryChange={(e) => setCategory(e.target.value)}
        priceSort={priceSort}
        onPriceSortChange={(e) => setPriceSort(e.target.value)}
      />
      <ProductList products={currentItems} />
      <Pagination currentPage={currentPage} totalPages={pageNumbers.length} onPageChange={setCurrentPage} />
    </div>
  );
}

export default App;
