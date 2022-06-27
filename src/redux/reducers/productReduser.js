import { ActionTypes } from "../contants/Action-types";

const intialstate = {
  products: [],
};

export const productReduser = (state = intialstate, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {...state, products:payload}
      case ActionTypes.FETCH_PRODUCTS:
      return {...state, products:payload}
    default:
      return state;
  }
};

export const selectedProductReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCTS:
            return {...state, ...payload};
            
    
        default:
            return state;
    }
}
