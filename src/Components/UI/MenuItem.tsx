import React from 'react';

interface MenuItemProps {
  item: {
    name: string;
    description: string;
    price: number;
    img: string;
  };
  addToCart: (item: any) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, addToCart }) => {
  const { name, description, price, img } = item;

  return (
    <div className="bg-gray-800 w-10/12 h-10/12 text-white rounded-lg shadow-md p-4 my-4">
      <div className="relative pb-3/4 flex items-center justify-center ">
        <img
          className="relative w-10/12 h-10/12 object-cover rounded-lg"
          src={img}
          alt={name}
        />
      </div>
      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-gray-300 mt-2">{description}</p>
      <p className="font-semibold mt-4">${price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(item)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-2"
      >
        Add to cart
      </button>
    </div>
  );
};

export default MenuItem;
