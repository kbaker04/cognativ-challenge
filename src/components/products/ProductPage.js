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

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    firstPage && setProducts(firstPage.results);
    let nextPage = firstPage && firstPage.next;
    let prevPage = firstPage && firstPage.previous;
    setShowNext(nextPage ? nextPage.split("=").pop() : false);
    setShowPrev(prevPage ? prevPage.split("=").pop() : false);
  }, [firstPage]);

  useEffect(() => {
    //if unable to page - website offline - improve in next interation
    fetchStatus && history.push("/offline");
  }, [fetchStatus]);

  const nextPage = () => {
    dispatch(fetchNextProductPage(showNext));
  };

  const prevPage = () => {
    dispatch(fetchNextProductPage(showPrev));
  };

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
          title={"Next Page"}
          showNext={showNext}
          showPrev={showPrev}
        />
        {renderProducts(products)}
      </div>
    );
  }

  return <h3>Loading...</h3>;
};

export default ProductPage;
