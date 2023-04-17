import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../Style/styles';
import { navLinks } from '../Store/consts';
import { Link } from 'react-router-dom';
import { useUser } from './auth/UserContext';

const Navbar = () => {
  const { user } = useUser();
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
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
          <div className="absolute bg-white border border-gray-300 p-4 rounded shadow">
            <div>{user?.email}</div>
            <Link to={"/order"}>Reservation</Link>
          </div>
        )}
      </li>
    </ul>
  </div>
);
};

export default Navbar;

