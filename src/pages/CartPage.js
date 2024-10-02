import React from 'react';
import { Container, Table, Button, Image, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from '../redux/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <Container className="mt-5">
        <Alert variant="info">Your cart is empty.</Alert>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Your Cart</h2>
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <Image src={item.image} alt={item.title} fluid style={{ maxWidth: '50px' }} />
              </td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td>
                <Button variant="secondary" size="sm" onClick={() => handleDecrease(item.id)} disabled={item.quantity === 1}>
                  -
                </Button>{' '}
                <span>{item.quantity}</span>{' '}
                <Button variant="secondary" size="sm" onClick={() => handleIncrease(item.id)}>
                  +
                </Button>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => handleRemove(item.id)}>
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4>Total: ${totalAmount.toFixed(2)}</h4>
      <Button variant="warning" onClick={handleClearCart}>
        Clear Cart
      </Button>
    </Container>
  );
};

export default CartPage;
