import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_PRODUCTS_API,
  method: "get",
  headers: {
    "content-type": "application/json",
  },
});
