import React, { useEffect, useState } from 'react'
import { getReservation } from '../firebase/firebaseUtil'
import { useUser } from './auth/UserContext'

type Props = {
    res : any
    onClose: () => void
}

const Reservation = ({res, onClose}: Props) => {

const reservation = res.reservation
if (!reservation) {
    return null; 
  }

  return (
    <div  onClick={()=> onClose()} className="absolute bg-white border border-gray-300 p-4 rounded shadow text-black z-40">
      <div className="mb-4 flex flex-col">
        <h1 className="text-lg font-bold">Reservation</h1>
       
      </div>
      <ul className='flex flex-col'>
        <h3>History</h3>
        {reservation.map((r:any, index:any) => (
          <li key={index} className='w-[100%] p-3'>
            Total: {r.total}, Time: {r.time}, Table: {r.table}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservation