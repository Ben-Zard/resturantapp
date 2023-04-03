import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <>
        <div className="flex first-letter: justify-center items-center h-[70vh]">
           <div className='m-5'>
              <h1 className="text-6xl font-bold">About</h1>

           </div>
           <div className='m-5'>
                <p className="text-2xl font-bold">This is a simple React App</p>
           </div>
        </div>
    </>
  )
}

export default About