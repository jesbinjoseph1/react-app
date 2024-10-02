import React, { useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import ProductCard from '../components/ProductCard';
import { addToCart } from '../redux/cartSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status !== 'succeeded') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (status === 'loading') {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (status === 'failed') {
    return (
      <Container className="mt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row>
        {items.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
            <ProductCard product={product} addToCartHandler={handleAddToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
