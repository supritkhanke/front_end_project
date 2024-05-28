import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Featured Products</h1>
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

export default HomePage;
