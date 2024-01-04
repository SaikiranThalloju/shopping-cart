
import { combineReducers } from 'redux';
import productReducer from './productReducer';
import cartReducer from './cartReducers';

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});

export default rootReducer;
