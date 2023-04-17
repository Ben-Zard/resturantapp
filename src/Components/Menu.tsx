
import Navbar from './UI/Navbar'
import { fetchMenuItems } from '../firebase/firebaseUtil'
import { useEffect, useState } from 'react'
import MenuItem from './UI/MenuItem'

interface MenuProps {
  addToCart: (item: any) => void;
}

const Menu: React.FC<MenuProps> = ({ addToCart }) => {
   const [menuItems, setMenuItems] = useState<any>([]);

useEffect(() => {
  fetchMenuItems().then((items):any => setMenuItems(items));

}, []);
console.log(menuItems)
  return (
    <div className='grid grid-cols-3'>
      {menuItems.map((item:any, index:any) => (
        <MenuItem key={index} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Menu;


