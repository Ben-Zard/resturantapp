import React, { useEffect, useState } from 'react';
import '../Style/index.css'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { fetchTable } from '../firebase/firebaseUtil';
type Props = {};


type TableData = {
  capacity: number;
  available: boolean;
};

function Tables({}: Props) {
  const [table, setTable] = useState<TableData|any>([]);
  const [tables, setTables] = useState<any>([]);

  useEffect(() => {
    fetchTable().then((items):any => setTable(items));
    console.log(table);
  }, []);


  const handleClick = (tableId: string) => {
    setTables(tableId);
  };


  return (
    <div className='pt-8 '>
      <h2 className='text-center p-8'>Open Tables</h2>
      <div className="restaurant-layout">
        <div className="tables-row">
          {table.slice(0, 2).map((item: any) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.capacity)}
              className={`table ${item.available ? 'bg-gray-100' : 'bg-red-500'}`}
            >
              Table {item.id}
            </button>
          ))}
         </div>
        <div className="tables-column">
          {table.slice(2, 4).map((item: any) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.capacity)}
              className={`table  ${item.available ? 'bg-gray-100 my-8' : 'bg-red-500 my-8'}`}
            >
              Table {item.id}
            </button>
          ))}
        </div>
        <div className="tables-row">
          {table.slice(4).map((item: any) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.capacity)}
              className={`table ${item.available ? 'bg-gray-100' : 'bg-red-500'}`}
            >
              Table {item.id}
            </button>
          ))}
        </div>
      </div>
      <div className='text-center p-8'>
        {tables && <h2>There are {tables} spots at this table</h2>}
      </div>
    </div>
  );
  
  
}

export default Tables;
