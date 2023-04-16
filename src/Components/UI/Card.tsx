import React from 'react'

type Props = {
    name: string
    description: string
    price: number
    img : string
}

    const Card = ({ name, description, price ,img}:Props) => {
      
        return (
            <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 my-4">
            <div>
              <img
                className="rounded-lg h-48 w-48 mx-auto"
                src={img}
                alt={name}
              />
            </div>
            <h2 className="text-xl font-semibold mt-4">{name}</h2>
            <p className="text-gray-300 mt-2">{description}</p>
            <p className="font-semibold mt-4">${price}</p>
          </div>
        );
      };

export default Card