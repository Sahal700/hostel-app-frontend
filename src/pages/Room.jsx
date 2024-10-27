import React from 'react'
import Roomc from '../components/Roomc'

function Room() {
  return (
    <div className='grid grid-cols-[repeat(1,3fr_1fr)] py-10 px-3'>
    <div className='grid grid-cols-[repeat(3,1fr)] gap-3'>
      <div>
        <h4 className='text-center text-xl' >room no: <span className='font-semibold'>1</span></h4>
        <Roomc />
        <Roomc />
      </div>
      <div>
        <h4 className='text-center text-xl' >room no: <span className='font-semibold'>1</span></h4>
        <Roomc/>
      </div>
      <div>
        <h4 className='text-center text-xl' >room no: <span className='font-semibold'>1</span></h4>
        <Roomc/>
      </div>
    </div>

    <div>
      

    </div>
    
  </div>
  )
}

export default Room
