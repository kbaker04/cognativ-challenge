import productsAPI from "../../apis/productsAPI";
import { PRODUCT_ACTIONS } from "../../helpers/constants/actions";
import productsReducer from "../reducers/productsReducer";

export const fetchProducts = () => async (dispatch) => {
  const response = await productsAPI.get("/products");
  dispatch({ type: PRODUCT_ACTIONS.FETCH_PRODUCTS, payload: response.data });
};
