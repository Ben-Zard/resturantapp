import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../../Style/styles';
import { navLinks } from '../../Store/consts';
import { Link } from 'react-router-dom';
import { useUser } from '../auth/UserContext';
import Reservation from '../Reservation';
import { getReservation } from '../../firebase/firebaseUtil';

const Navbar = () => {
  const { user } = useUser();
  const [showDetails, setShowDetails] = useState(false);
  const [reservation, setRes] = useState<any>([])

  const toggleDetails = async () => {
    setShowDetails(!showDetails);
    // const data = getReservation(user!.uid)
    // setRes(data)
    // console.log(data.then((res) => console.log(res)))
    const userData = await getReservation((user!.uid));
    setRes(userData);
    console.log(userData);
  };
  



  return (
    <div className={`${styles.nav} justify-center content-center flex w-[100vw] text-center fixed`}>
    <ul className="flex justify-between w-[50vw]">
      {navLinks.map((link) => (
        <li key={link.id}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
      <li>
        <FontAwesomeIcon icon={faUserCircle} onClick={toggleDetails} className="cursor-pointer" />
        {showDetails && (
          <div className="absolute bg-white border border-gray-300 p-4 rounded shadow text-black">
            <div>{user?.email}</div>
            {user?.email && <Reservation  res = {reservation}/>}
          </div>
        )}
      </li>
    </ul>
  </div>
);
};

export default Navbar;

