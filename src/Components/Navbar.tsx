import {useState} from 'react'
import styles from '../Style/styles'
import { Link } from 'react-router-dom'
import { navLinks } from '../Store/consts'

type Props = {}

const Navbar = (props: Props) => {

  
  return (
    <div className={ `${styles.nav} justify-center content-center flex w-[100vw]  text-center fixed`}>
      <ul className='flex justify-between w-[50vw]'>
      {navLinks.map((link) => (
          <li key={link.id}>
            <Link to={link.id}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar

