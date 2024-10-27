import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function Landing() {
  return (
    <>
      <div className=' md:p-10 p-5 md:grid grid-cols-[repeat(1,2fr_2fr)]'>
      <div className='flex flex-col justify-center  '>
        <h1 className='text-3xl mb-3 font-[550] text-[#46c6df] '>Effortless Hostel Management, All in One Place</h1>
        <p className='text-xl font-[300]' >Streamline your hostel operations with our intuitive and user-friendly platform. From room assignments to payments, manage it all with ease.</p>
        <div className="mt-5">
           <Link to={'/landing'}> <button className='bg-[#a7e1f9] hover:bg-[#1c6bb0] hover:text-[#a7e1f9] p-2  px-4 text-[#1c6bb0] font-semibold rounded-sm'>Get Started <FontAwesomeIcon className='ms-1' icon={faArrowRight} /> </button></Link>
           
        </div>
    </div>
        <div className=' p-3'><img src="https://img.freepik.com/premium-vector/hostel-building-flat-isolated-colorful-illustration-cartoon-geometric-style-white-background_178650-4796.jpg?" alt="" className='w-5/6' /></div>
      </div>
      
    </>
  )
}

export default Landing

