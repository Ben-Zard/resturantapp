import React, { useEffect, useState } from 'react'
import { getReservation } from '../firebase/firebaseUtil'
import { useUser } from './auth/UserContext'

type Props = {
    res : any
}

const Reservation = ({res}: Props) => {
console.log(res)
const reservation = res.reservation
if (!reservation) {
    return null; // or return a placeholder component or message
  }

  return (
    <>
    <h1>Reservations</h1>
    <ul>
      {reservation.map((r:any, index:any) => (
        <li key={index}>
          Total: {r.total}, Time: {r.time}, Table: {r.table}
        </li>
      ))}
    </ul>
  </>
  );
};

export default Reservation