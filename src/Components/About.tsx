import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <>
        <div className="flex first-letter: justify-center items-center h-[30vh] pb-32">
           <div className='m-3 w-[50rem]'>
              <h1 className="text-lg font-bold">This restaurant website offers the convenience of table reservations and the comfort of having food ready at your table upon arrival. With just a few clicks, customers can book a table and pre-order their meals to minimize waiting times and ensure a seamless dining experience.</h1>
           </div>
           <div className='m-3'>
                <p className="text-3xl font-bold">1.Check Out Table<hr/>2.Check Out Menu <hr/> 3.Place Your Order</p>
           </div>
        </div>
    </>
  )
}

export default About