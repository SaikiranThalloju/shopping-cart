
const cartReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        if (state.find(item => item.id === action.payload.id)) {
          return state;
        }
        return [...state, action.payload];
  
      case 'REMOVE_FROM_CART':
        return state.filter(item => item.id !== action.payload);
  
      case 'CLEAR_CART':
        return [];
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  