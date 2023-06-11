
export const cartReducer = (state , action) => {
    switch(action.type){
        case "ADD_TO_CART":
        return {...state , cart:[...state.cart, {...action.payload , qty : 1}]};

        case "REMOVE_TO_CART":
            return {...state , cart:state.cart.filter(item => item.id !== action.payload.id)}

        case "CHANGE_CART_QTY":
            return {...state , cart: state.cart.filter(item => item.id === action.payload.id ? item.qty = action.payload.qty : item.qty)}

        default:
            return state;
    }
}


  export const productReducer = (state, action) => {
    switch (action.type) {
      case 'RED':
        return { ...state, red: !state.red };
      case 'BLUE':
        return { ...state, blue: !state.blue };
      case 'GREEN':
        return { ...state, green: !state.green };
      case 'YELLOW':
        return { ...state, yellow: !state.yellow };
      case 'MEN':
        return { ...state, men: !state.men };
      case 'WOMEN':
        return { ...state, women: !state.women };
      case 'RATING_1':
        return { ...state, rate_1: !state.rate_1 };
      case 'RATING_2':
        return { ...state, rate_2: !state.rate_2 };
      case 'RATING_3':
        return { ...state, rate_3: !state.rate_3 };
      case 'POLO':
        return { ...state, polo: !state.polo };
      case 'HODDIE':
        return { ...state, hoddie: !state.hoddie };
      case 'BASIC':
        return { ...state, basic: !state.basic };
        case "FILTER_BY_SEARCH":
          return { ...state, searchQuery: action.payload };
      
      default:
        return state;
    }
  };