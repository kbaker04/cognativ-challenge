import productsAPI from "../../apis/productsAPI";
import { PRODUCT_ACTIONS } from "../../helpers/constants/actions";

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await productsAPI.get("/products");
    dispatch({ type: PRODUCT_ACTIONS.FETCH_PRODUCTS, payload: response.data });
    dispatch({ type: PRODUCT_ACTIONS.ERROR_FETCHING_PRODUCTS, payload: false });
  } catch (error) {
    dispatch({ type: PRODUCT_ACTIONS.ERROR_FETCHING_PRODUCTS, payload: true });
  }
};

export const fetchNextProductPage = (page) => async (dispatch) => {
  const response = await productsAPI.get(`/products?page=${page}`);
  console.log(response.data);
  dispatch({
    type: PRODUCT_ACTIONS.FETCH_NEXT_PRODUCT_PAGE,
    payload: response.data,
  });
};
