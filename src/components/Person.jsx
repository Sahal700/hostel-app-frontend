import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function Person() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const f=false
  return (
    <>
    <div className='shadow bg-white rounded-md p-3 mt-3'>
      <div>
        <div className='flex items-center '>
          <div className='flex items-center'>
            <img src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png" className='rounded-[50%] w-[50px] me-2' alt="" />
            <span>user 1</span>
          </div>
          <div className='ms-auto'>
          <FormControlLabel control={<Checkbox {...label} defaultChecked={f} onChange={(e)=>{console.log(e.target.checked)}} color="success" />} label="payment" />
          </div>
     </div>
     <div className='flex p-4 justify-between'>
      <button className='bg-red-500 text-white p-1 px-2 rounded '>Remove</button>
      <button className='bg-teal-800 text-white p-1 px-2 rounded '>Change Room</button>
     </div>
      </div>
      </div>
    </>
  )
}

export default Person
