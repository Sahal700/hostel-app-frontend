import React from 'react';
import Person from './Person';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';

function Roomc() {
 
  return (
    <>
      <div className='bg-[#92ddfd62] p-5 rounded'>
          <h4 className='text-3xl text-center'>room no: <span className='font-semibold'>1</span></h4>
          <p className='text-center mt-3'>
            <FontAwesomeIcon className='text-2xl me-3' icon={faBed} />
            <span className='text-2xl'>: 4/5</span>
          </p>
        <div className='flex justify-between mt-4'>
          <button className='bg-red-500 text-white p-1 px-2 rounded w-full me-3 '>Remove</button>
          <button className='bg-teal-800 text-white p-1 px-2 rounded w-full'>View details</button>
        </div>
      </div>
    </>
  );
}

export default Roomc;
