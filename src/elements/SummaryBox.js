import React from "react";

const SummaryBox = (props) => {
  const { totPrice, avgPrice } = props;

  return (
    <div className="summary-box-container">
      <div className="summary-box">
        <div className="mt-4 text-center">
          <p>{`Total Cost: $${totPrice.toFixed(2)}`}</p>
          <p>{`Average Item Cost: $${avgPrice.toFixed(2)}`}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryBox;
