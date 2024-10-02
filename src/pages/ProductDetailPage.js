import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Button, Spinner, Alert } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState('idle'); 
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      setStatus('loading');
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        setStatus('succeeded');
      } catch (err) {
        setError('Failed to fetch product details.');
        setStatus('failed');
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
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
    product && (
      <Container className="mt-4">
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.title} fluid style={{ maxHeight: '500px' }} />
          </Col>
          <Col md={6}>
            <h2>{product.title}</h2>
            <h4 className="text-muted">${product.price}</h4>
            <p className="mt-4">{product.description}</p>
            <Button variant="primary" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Container>
    )
  );
};

export default ProductDetailPage;
