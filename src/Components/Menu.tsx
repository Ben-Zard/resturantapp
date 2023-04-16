
import Navbar from './Navbar'
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
    <div>
      {menuItems.map((item:any, index:any) => (
        <MenuItem key={index} item={item} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Menu;




// import Navbar from './Navbar'
// import { fetchMenuItems } from '../firebase/firebaseUtil'
// import { useEffect, useState } from 'react'
// import Card from './UI/Card'
// type Props = {}

// const Menu = (props: Props) => {



//   const [menuItems, setMenuItems] = useState<any>([]);

// useEffect(() => {
//   fetchMenuItems().then((items):any => setMenuItems(items));

// }, []);
// console.log(menuItems)
//   return (
//     <>   
//      <Navbar/>
//      <div className="container mx-auto px-4">
//     <h1 className="text-3xl font-bold mb-8 text-white pt-10 text-center">Menu Items</h1>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {menuItems.map((item:any, index:any) => (
//         <Card
//           key={index}
//           name={item.name}
//           description={item.description}
//           price={item.price}
//           img={item.img}
//         />
//       ))}
//     </div>
//   </div>
//     </>
//   )
// }

// export default Menu
