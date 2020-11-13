import React from "react";
import Button from "react-bootstrap/Button";

const PaginateButtons = (props) => {
  return (
    <>
      {props.showPrev && (
        <div className="mt-2 text-center container">
          <Button variant="outline-primary" onClick={() => props.prevPage()}>
            Previous Page
          </Button>
        </div>
      )}
      {props.showNext && (
        <div className="mt-2 text-center container">
          <Button variant="outline-primary" onClick={() => props.nextPage()}>
            Next Page
          </Button>
        </div>
      )}
    </>
  );
};

export default PaginateButtons;
