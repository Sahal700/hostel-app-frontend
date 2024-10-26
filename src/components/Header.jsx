import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotel } from '@fortawesome/free-solid-svg-icons'
function Header() {
  return (
    <div className='md:p-4 py-4 flex md:ps-[100px] md:justify-start justify-center items-center bg-[#1c6bb0]'>
        <img src="https://tse2.mm.bing.net/th?id=OIP.09ERKUaIiUq2mf1x9W-gywHaHw&pid=Api&P=0&h=180" alt="" className='w-[50px] me-3 rounded-[50%]' />
      <h5 className='text-3xl font-[500] text-white '>Hostel</h5>
    </div>
  )
}

export default Header
