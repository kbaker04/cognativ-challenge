import React from "react";
import Card from "react-bootstrap/Card";

const ProductCard = (props) => {
  const { image, title, price, description } = props;
  return (
    <div className="col-xs-12 col-sm-12 col-md-4 mb-2">
      <Card className="product-card mb-4">
        <Card.Img variant="top" className="product-image p-2" src={image} />
        <Card.Title className="card-header rounded-0">
          <h3 className="my-0 text-capitalize font-weight-bold">{title}</h3>
        </Card.Title>
        <Card.Body>
          <div className="d-flex">
            <div>
              <h4>
                <strong>{price ? `Price: $${price}` : `Free`}</strong>
              </h4>
              <div className=" mt-1 text-uppercase">{description}</div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
