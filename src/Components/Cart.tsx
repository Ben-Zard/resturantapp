import React, { useState } from 'react';
import Menu from './Menu';
import CheckoutModal from './UI/CheckoutModal';

interface CartItemProps {
  item: any;
}

const CartItem = ({ item }:CartItemProps) => (
  <div className="text-black flex justify-between py-2 border-b border-gray-300">
    <div className=" text-black text-sm font-semibold">{item.name}</div>
    <div className="text-black  text-sm font-semibold">${item.price.toFixed(2)}</div>
  </div>
);

const Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };


  const addToCart = (item: any) => {
    setCartItems([...cartItems, item]);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
     <CheckoutModal show={showModal} onClose={handleCloseModal} totalPrice= {totalPrice} />
    <div className="w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4 pt-8">Your Cart</h2>
      <div className="bg-white shadow-md p-4 rounded-lg">
        {cartItems.length === 0 ? (
          <div className="text-gray-500 text-center">Your cart is empty.</div>
        ) : (
          cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <div className="text-right mt-4">
          <p className="text-lg font-semibold">
            Total: ${totalPrice.toFixed(2)}
          </p>
          <button 
          onClick={handleShowModal}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-2">
            Checkout
          </button>
        </div>
      )}

    </div>
      <Menu addToCart={addToCart} />
    </>
  );
};

export default Cart;
