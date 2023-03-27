import {useState} from 'react'
import Login from './Login'

type Props = {}

const Navbar = (props: Props) => {
  const [show, setShow] = useState(false)
  
  return (
    <div>
      <button onClick={()=>setShow(!show)}> Login </button>
      {show && <div> <Login/> </div>}

    </div>
  )
}

export default Navbar

