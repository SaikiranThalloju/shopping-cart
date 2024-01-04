// Import necessary dependencies
import React,{useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from './actions/productActions';
import HomePage from './components/Homepage';
import CartPage from './components/CartPage';
import  '../src/CSS/style.css'

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    // Fetch products from the API
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => dispatch(setProducts(data.products)))
      .catch((error) => console.error('Error fetching products:', error));
  }, [dispatch]);

  return (
    <Router>
      {/* Wrap your components inside Router */}
      <div>
        <nav className='nav'>
          <div> Shopping Cart</div>
          <div>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/cart" activeClassName="active">
            My Cart
          </NavLink>
          </div>
        </nav>

        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
