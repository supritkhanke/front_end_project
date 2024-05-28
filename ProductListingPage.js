import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import ProductCard from '../components/ProductCard';

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const [category, setCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const handleFilter = () => {
    // Implement filter logic here
  };

  return (
    <div>
      <h1>Product Listing</h1>
      <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
        </select>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange}
          onChange={(e) => setPriceRange([0, e.target.value])}
        />
        <button onClick={handleFilter}>Apply Filters</button>
      </div>
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListingPage;
