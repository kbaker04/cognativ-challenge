import ProductCard from "../elements/ProductCard";
import CardDeck from "react-bootstrap/CardDeck";
import { v1 as uuid } from "uuid"; // imported as no unique id on api

export const renderProducts = (products) => {
  return (
    <CardDeck>
      {products.map((product) => {
        return (
          <ProductCard
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            key={uuid()}
          />
        );
      })}
    </CardDeck>
  );
};
