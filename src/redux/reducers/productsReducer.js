import { PRODUCT_ACTIONS } from "../../helpers/constants/actions";

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.FETCH_PRODUCTS:
      return { ...state, data: { ...action.payload } };
    case PRODUCT_ACTIONS.ERROR_FETCHING_PRODUCTS: {
      return { ...state, errorFetchingProducts: action.payload };
    }
    case PRODUCT_ACTIONS.FETCH_NEXT_PRODUCT_PAGE:
      return { ...state, data: { ...action.payload } };
    default:
      return state;
  }
};

export default productsReducer;
