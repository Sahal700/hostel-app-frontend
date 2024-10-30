import React, { useState } from 'react'


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Checkbox from '@mui/material/Checkbox';
import { editstudentApi } from '../services/allApi';

function Person({student}) {
  
  const [show, setShow] = useState(false);
  const [payment,setpayment] =useState(student.fee)
   console.log(payment);
   
  const handleClose = () => {
    setShow(false);}
  const handleShow = () => setShow(true);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const f=false

  const handleCheckbox =(e)=>{
    if (e.target.checked) {
      setpayment( 'payed')
    }else{
      setpayment( 'pending')
    }
  }
 const handlesavechange =async()=>{
  const result =  await editstudentApi()
 }

  
  return (
    <>
    <div className='shadow bg-white rounded-md p-3 mt-3'>
      <div>
        <div className='flex items-center '>
          <div className='flex items-center'>
            <img src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png" className='rounded-[50%] w-[50px] me-2' alt="" />
            <span>{student.name}</span>
          </div>
          <div className='ms-auto'>
          <span className='ms-2'>Fee :<Checkbox {...label} defaultChecked={student.fee=='payed'?true:false} checked={payment=='payed'?true:false} onChange={(e)=>{handleCheckbox(e)}} color="success" />{payment=='payed' ? <span className='text-green-500'>Payed</span> : <span className='text-orange-500'>Pending</span>}</span>
          </div>
     </div>
     <div className='flex p-4 justify-between'>
      <button className='bg-red-500 text-white p-1 px-2 rounded '>Remove</button>
      <button onClick={handlesavechange} className='bg-blue-600 text-white p-1 px-2 rounded '>
            Save Changes
          </button>
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
          <Button  variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Person
