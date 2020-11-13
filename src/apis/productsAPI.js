import axios from "axios";

//creates a reusable default instance of the products api
export default axios.create({
  baseURL: process.env.REACT_APP_PRODUCTS_API,
  method: "get",
  headers: {
    "content-type": "application/json",
  },
});
