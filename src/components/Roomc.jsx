import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Person from './Person';



function Roomc({room}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

 const handlesavechanges =()=>{

 }
  return (
    <>
      <div className='bg-[#92ddfd62] p-5 rounded'>
          <div className='flex items-center  justify-between'>
            <h4 className='text-3xl '>room no: <span className='font-semibold'>{room.roomNo}</span></h4>
            <FontAwesomeIcon className='text-red-500 '  icon={faTrash} />
            </div>
          <p className='text-center mt-3'>
            <FontAwesomeIcon className='text-2xl me-3' icon={faBed} />
            <span className='text-2xl'>: {room.students.length}/{room.capacity}</span>
          </p>
        <div className='flex justify-between mt-4'>
          
          <button onClick={handleShow} className='bg-teal-800 text-white p-1 me-3  rounded w-full' >View details</button>
          <button onClick={handleShow2} className='bg-green-500 text-white p-1  rounded w-full '>ADd</button>

        </div>
      </div>

      <Modal show={show} onHide={handleClose} className=''>
        <Modal.Header closeButton>
          <Modal.Title>Room no: 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {room.students.length>0 ?
           room.students.map((item)=>(
            <Person student={item}/>
           ))
          :
          <h4>room is empty</h4> 
          }
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>




      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Roomc;
