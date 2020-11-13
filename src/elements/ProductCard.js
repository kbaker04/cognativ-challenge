import React from "react";
import Card from "react-bootstrap/Card";

const ProductCard = (props) => {
  const { image, title, price, description } = props;
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 mb-2">
      <Card className="deal-card mb-4">
        <Card.Img variant="top" className="product-image p-2" src={image} />
        <Card.Title className="card-header rounded-0">
          <h4 className="my-0 text-capitalize">{title}</h4>
        </Card.Title>
      </Card>
    </div>
  );
};

export default ProductCard;
