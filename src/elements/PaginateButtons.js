import React from "react";
import Button from "react-bootstrap/Button";

const PaginateButtons = (props) => {
  let enablePrev = props.showPrev ? false : "disabled";
  let enableNext = props.showNext ? false : "disabled";

  return (
    <>
      <div className="container text-center">
        <Button
          variant="outline-primary"
          onClick={() => props.prevPage()}
          disabled={enablePrev}
        >
          Previous Page
        </Button>

        <Button
          variant="outline-primary"
          onClick={() => props.nextPage()}
          disabled={enableNext}
        >
          Next Page
        </Button>
      </div>
    </>
  );
};

export default PaginateButtons;
