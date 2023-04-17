// CheckoutModal.tsx
import React, { useState } from "react";
import { setReservation, updateTableAvailability } from "../../firebase/firebaseUtil";
import { useUser } from "../auth/UserContext";

interface CheckoutModalProps {
  show: boolean;
  onClose: () => void;
  totalPrice: string;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ show, onClose,totalPrice }) => {
    const { user } = useUser();


  const [tables, setTables] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(tables);
    if (tables) {      
      await updateTableAvailability(tables, false);
        await setReservation(user!.uid, tables, totalPrice);
    }
    onClose();
  };

  return (
    <>
    {show && (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-black p-8 w-96 rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="block mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 w-full p-2 rounded mb-4 text-black"
          />

          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 w-full p-2 rounded mb-4  text-black"
          />

          <label htmlFor="address" className="block mb-2">
            Address:
          </label>
          <input
            type="text"
            id="address"
            className="border border-gray-300 w-full p-2 rounded mb-4  text-black"
          />

          <label htmlFor="creditCard" className="block mb-2">
            Credit Card:
          </label>
          <input
            type="text"
            id="creditCard"
            className="border border-gray-300 w-full p-2 rounded mb-4 text-black"
          />

          <label htmlFor="zipCode" className="block mb-2">
            Table Selected:
          </label>
          <select
            onChange={(e) => setTables(e.target.value)}
            name="table"
            id="table"
            className="border border-gray-300 w-full p-2 rounded mb-4 text-black"
          >
            {" "}
            <option value="1">Table 1</option>
            <option value="2">Table 2</option>
            <option value="3">Table 3</option>
            <option value="4">Table 4</option>
            <option value="4">Table 5</option>
            <option value="4">Table 6</option>
          </select>

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
         )}
         </>
  );
};

export default CheckoutModal;
