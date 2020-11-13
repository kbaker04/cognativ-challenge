import { PRODUCT_ACTIONS } from "../../helpers/constants/actions";

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_ACTIONS.FETCH_PRODUCTS:
      return { ...state, firstPage: { ...action.payload } };
    default:
      return state;
  }
};

export default productsReducer;
