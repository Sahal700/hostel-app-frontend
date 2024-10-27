import React from 'react'
import Roomc from '../components/Roomc'

function Room() {
  return (
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
  )
}

export default Room
