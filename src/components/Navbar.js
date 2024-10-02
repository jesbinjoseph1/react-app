import React, { useEffect } from 'react';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/productSlice';
// import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ username }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);
  const cartItems = useSelector((state) => state.cart.cartItems);

//   const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>E-Commerce</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>All</Nav.Link>
            </LinkContainer>
            {categories.map((category) => (
              <LinkContainer to={`/category/${category}`} key={category}>
                <Nav.Link>{category.charAt(0).toUpperCase() + category.slice(1)}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
          <Nav>
            <Navbar.Text className="me-3">Signed in as: {username}</Navbar.Text>
            <Link to="/cart" className="nav-link">
              Cart <Badge bg="secondary">{cartCount}</Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
