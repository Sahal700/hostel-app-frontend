import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Person from './Person';



function Roomc() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='bg-[#92ddfd62] p-5 rounded'>
          <div className='flex items-center  justify-between'>
            <h4 className='text-3xl '>room no: <span className='font-semibold'>1</span></h4>
            <FontAwesomeIcon className='text-red-500 '  icon={faTrash} />
            </div>
          <p className='text-center mt-3'>
            <FontAwesomeIcon className='text-2xl me-3' icon={faBed} />
            <span className='text-2xl'>: 4/5</span>
          </p>
        <div className='flex justify-between mt-4'>
          
          <button onClick={handleShow} className='bg-teal-800 text-white p-1 me-3  rounded w-full' >View details</button>
          <button className='bg-green-500 text-white p-1  rounded w-full '>ADd</button>

        </div>
      </div>

      <Modal show={show} onHide={handleClose} className=''>
        <Modal.Header closeButton>
          <Modal.Title>Room no: 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Person/>
          <Person/>
          <Person/>
          <Person/>
          <Person/>
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
  );
}

export default Roomc;
