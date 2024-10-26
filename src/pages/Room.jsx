import React from 'react'
import Roomc from '../components/Roomc'

function Room() {
  return (
    <div className='grid grid-cols-[repeat(1,3fr_1fr)] py-10'>
    <div className='grid grid-cols-[repeat(3,1fr)]'>
      <div><Roomc/></div>
      <div><Roomc/></div>
      <div><Roomc/></div>
    </div>

    <div>
      

    </div>
    
  </div>
  )
}

export default Room
