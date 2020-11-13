import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  fetchNextProductPage,
} from "../../redux/actions/productActions";
import PaginateButtons from "../../elements/PaginateButtons";
import SummaryBox from "../../elements/SummaryBox";
import history from "../../history";
import { renderProducts } from "../../helpers/renders";

/**
 * ProductPage Component fetches products from api and renders results
 **/

const ProductPage = () => {
  const firstPage = useSelector((state) => state.products.data);
  const [products, setProducts] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [showPrev, setShowPrev] = useState(false);

  const fetchStatus = useSelector(
    (state) => state.products.errorFetchingProducts
  );

  const dispatch = useDispatch();

  //fetch initial list of products
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  //runs when firstpage is updated from fetching new product list
  useEffect(() => {
    firstPage && setProducts(firstPage.results);
    let nextPage = firstPage && firstPage.next;
    let prevPage = firstPage && firstPage.previous;
    //capture the next page path from the api if exists - false disables next button
    setShowNext(nextPage ? nextPage.split("=").pop() : false);
    //capture the next page path from the api if exists - false disables previous button
    setShowPrev(prevPage ? prevPage.split("=").pop() : false);
  }, [firstPage]);

  useEffect(() => {
    //if unable to fetch products redirect to offline path - improve in future interation
    fetchStatus && history.push("/offline");
  }, [fetchStatus]);

  //called from PaginateButtons onClick function
  const nextPage = () => {
    dispatch(fetchNextProductPage(showNext));
  };

  //called from PaginateButtons onClick function
  const prevPage = () => {
    dispatch(fetchNextProductPage(showPrev));
  };

  //if products are set show products
  if (products) {
    let totPrice = 0;

    products.map((product) => {
      totPrice += product.price;
    });

    return (
      <div className="container">
        <SummaryBox
          products={products}
          totPrice={totPrice}
          avgPrice={totPrice / products.length}
        />
        <PaginateButtons
          nextPage={nextPage}
          prevPage={prevPage}
          showNext={showNext}
          showPrev={showPrev}
        />
        {/* renderProducts in render.js for reusability */}
        {renderProducts(products)}
      </div>
    );
  }

  // create proper loader in future iteration
  return <h3>Loading...</h3>;
};

export default ProductPage;
