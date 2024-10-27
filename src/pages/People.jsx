import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'



function People() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='p-5'>
      <div className=' flex justify-between p-1 mb-4 pe-2'>
        <button className='bg-green-400 text-white items-center p-2 px-5'>Add</button>
        <p className='text-xl'>Total no of hostlers : <span className='font-bold'>100</span></p>
      </div>
     <table className='w-full '> 
      <thead className='text-center border border-5 border-white bg-slate-500 text-white'>
        <tr className=''>
          <th className='p-3 border border-s-5 border-white'>Name</th>
          <th className='p-3 border border-s-5 border-white'>Mobile no</th>
          <th className='p-3 border border-s-5 border-white'>Joined date</th>
          <th className='p-3 border border-s-5 border-white'>Fees</th>
          <th className='p-3 border border-s-5 border-white'>Room no</th>
          <th className='p-3 border border-s-5 border-white'></th>
        </tr>
      </thead>
      <tbody className='bg-slate-300 border border-5 border-white' >
        <tr>
          <td className='p-3 border border-s-5 border-white'><img src="" alt="" /> neeee</td>
          <td className='p-3 border border-s-5 border-white'>8686868686</td>
          <td className='p-3 border border-s-5 border-white'>10/9/9</td>
          <td className='p-3 border border-s-5 border-white'>pending</td>
          <td className='p-3 border border-s-5 border-white'>4</td>
          <td className='p-3 border border-s-5 border-white'>
            <button className='bg-red-500  px-2 py-1 me-5 rounded-sm'>Remove <FontAwesomeIcon  icon={faTrash} /></button>
           <button onClick={handleShow} className='bg-blue-500 px-2 py-1 rounded-sm'> Edit <FontAwesomeIcon icon={faPenToSquare} /></button>
           </td>
        </tr>
      </tbody>
     </table>
     <Modal show={show} onHide={handleClose} className=''>
        <Modal.Header closeButton>
          <Modal.Title>Room no: 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" className='form-control  ' placeholder='Name' />
          <input type="text" className='form-control mt-3' placeholder='Mobile' />
          <input type="date" className='form-control mt-3' placeholder='Date' />
          <input type="text" className='form-control mt-3' placeholder='Room no' />
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default People
