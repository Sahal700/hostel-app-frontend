import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="">
      <div className="row w-100 p-md-16 p-10 ">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <Link to={'/room'} className='text-dark no-underline'>
            <div className='border flex items-center bg-white justify-between border-slate-400 p-3 rounded shadow '>
              <img src="https://cdn3.iconfinder.com/data/icons/travel-emoji/50/HotelRoom-1024.png" className='w-[100px]' alt="" />
              <div className='pe-4'>
                <h4>Rooms</h4>
                <p>Go  <FontAwesomeIcon icon={faArrowRight} /></p>
              </div>
            </div>
          </Link>

          <Link to={'/people'} className='text-dark no-underline'>
            <div className=' border flex items-center bg-white justify-between border-slate-400 p-3 mt-5 rounded shadow'>
              <img src="https://png.pngtree.com/png-vector/20221219/ourmid/pngtree-hostel-for-young-people-concept-png-image_6528745.png" alt="" className='w-[100px]' />
              <div className="pe-4">
              <h4>Hostelers</h4>
              <p>Go  <FontAwesomeIcon icon={faArrowRight} /></p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  )
}

export default Home
