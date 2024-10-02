import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product, addToCartHandler }) => {
  return (
    <Card className="h-100">
      <Link to={`/product/${product.id}`}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ height: '200px', objectFit: 'contain' }}
        />
      </Link>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="mt-auto">${product.price}</Card.Text>
        <Button variant="primary" onClick={() => addToCartHandler(product)}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
