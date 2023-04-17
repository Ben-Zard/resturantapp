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
  const [showDetails2, setShowDetails2] = useState(false);
  const [reservation, setRes] = useState<any>([])

  const toggleDetails = async () => {
    setShowDetails(!showDetails);
    const userData = await getReservation(user!.uid);
    setRes(userData);
  };

  const toggleDetails2 = () => {
    setShowDetails2(!showDetails2);
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
            <div className="fixed inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center">
              { user?.email && <p className='z-20  absolute top-20 text-3xl'>{user.email}</p>}
               {user?.email && <Reservation res={reservation} onClose={toggleDetails} /> }
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

