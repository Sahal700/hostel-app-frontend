import React from 'react'
import Roomc from '../components/Roomc'
import Button from 'react-bootstrap/Button';

function Room() {
  return (
   < >
     <div className=' flex justify-between p-5  pe-5'>
        <button className='bg-green-400 text-white items-center p-2 px-5'>Add</button>
        <p className='text-xl'>Total no of Room : <span className='font-bold'>100</span></p>
      </div>
      <div className='grid gap-4 grid-cols-[repeat(4,1fr)] py-10 px-3'>
        <div>
          <Roomc/>
        </div>
        <div>
          <Roomc/>
        </div>
        <div>
          <Roomc/>
        </div>
        <div>
          <Roomc/>
        </div>
        <div>
          <Roomc/>
        </div>
      
      
    </div>
   </>
  )
}

export default Room
