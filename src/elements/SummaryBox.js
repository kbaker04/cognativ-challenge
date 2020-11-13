import React from "react";
import Card from "react-bootstrap/Card";

const SummaryBox = (props) => {
  const { totPrice, avgPrice } = props;

  return (
    <div class="summary-box-container">
      <div class="summary-box">
        <div className="mt-4 text-center">
          <p>{`Total Cost: $${totPrice.toFixed(2)}`}</p>
          <p>{`Average Item Cost: $${avgPrice.toFixed(2)}`}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryBox;
