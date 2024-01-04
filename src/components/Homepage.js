import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    // Fetch products from the API
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => dispatch(setProducts(data.products)))
      .catch((error) => console.error('Error fetching products:', error));
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <h2>All Items</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginLeft: "3%" }}>
        {products.map((product) => (
          <div key={product.id} className='product-card' >
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{ width: '100%', height: 'auto' }}
            />
            <div className='title'>
            <h4 >{product.title}</h4>
            </div>
            <p>${product.price}</p>
            <button className='add-cart' onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;







