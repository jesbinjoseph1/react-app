import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import ProductCard from '../components/ProductCard';
import { addToCart } from '../redux/cartSlice';

const ProductListPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status !== 'succeeded') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const filteredItems = category === 'all' ? items : items.filter((item) => item.category === category);

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
      <h2 className="mb-4 text-capitalize">{category}</h2>
      <Row>
        {filteredItems.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
            <ProductCard product={product} addToCartHandler={handleAddToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductListPage;
