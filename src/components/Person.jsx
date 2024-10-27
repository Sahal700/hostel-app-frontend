import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Person() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      <button onClick={handleShow} className='bg-teal-800 text-white p-1 px-2 rounded '>Change Room</button>
     </div>
      </div>
      </div>
      <Modal show={show} onHide={handleClose} className=''>
        <Modal.Header closeButton>
          <Modal.Title>Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder='enter the room no:' />
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
    </>
  )
}

export default Person
