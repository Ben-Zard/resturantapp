import React from 'react'
import Menu from '../Components/Menu'
import Table from '../Components/Table'
import Navbar from '../Components/Navbar'

type Props = {}

const Restaurant  = (props: Props) => {
  return (
    <>   
     <Navbar/>
      {/* <Menu/> */}
      <Table/>

    </>
  )
}

export default Restaurant