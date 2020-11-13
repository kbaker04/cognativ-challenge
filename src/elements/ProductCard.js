import React from "react";
import Card from "react-bootstrap/Card";

const ProductCard = (props) => {
  const { image, title, price, description } = props;
  console.log(props);
  return (
    <Card>
      <Card.Img variant="top" className="product-image p-2" src={image} />
    </Card>
  );
};

export default ProductCard;
