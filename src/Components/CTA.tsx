import React from "react";
import {Link} from 'react-router-dom'
type Props = {};

const CTA = (props: Props) => {
  return (
    <>
        <div className="flex justify-center  h-[30vh] align-top text-start">
             <div className='m-5'>
                <div
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3"
                > <Link to = "/restaurant">
                Get Started
                </Link>  </div>
                </div>
              </div>
    </>
  );
};

export default CTA;
