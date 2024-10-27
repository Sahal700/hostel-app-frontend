import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="">
      <div className="row w-100 p-16">
        <div className="col-4"></div>
        <div className="col-4">
          <div className='border flex items-center justify-between border-slate-400 p-3 rounded shadow '>
            <img src="https://cdn3.iconfinder.com/data/icons/travel-emoji/50/HotelRoom-1024.png" className='w-[100px]' alt="" />
            <div className='pe-4'>
              <h4>Rooms</h4>
              <p>Go  <FontAwesomeIcon icon={faArrowRight} /></p>
            </div>
          </div>
          <div className=' border border-slate-400 p-5 mt-5 rounded shadow'>3</div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  )
}

export default Home
