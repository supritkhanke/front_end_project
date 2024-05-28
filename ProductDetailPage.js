import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../actions/productActions';

const ProductDetailPage = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, [dispatch, match.params.id]);

  const addToCartHandler = () => {
    // Implement add to cart functionality here
  };

  return (
    <div>
      {loading ? <p>Loading...</p> : error ? <p>{error}</p> : (
        <div className="product-detail">
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <div>
            <label>Quantity</label>
            <input type="number" value={qty} onChange={(e) => setQty(e.target.value)} />
          </div>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
