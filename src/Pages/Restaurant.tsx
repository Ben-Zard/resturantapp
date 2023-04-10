import React from 'react'
import Menu from '../Components/Menu'
import Table from '../Components/Table'

type Props = {}

const Restaurant  = (props: Props) => {
  return (
    <div>Restaurant

      <Menu/>
      <Table/>
    </div>
  )
}

export default Restaurant