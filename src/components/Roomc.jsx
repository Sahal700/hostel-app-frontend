import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
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
          <h4 className='text-3xl text-center'>room no: <span className='font-semibold'>1</span></h4>
          <p className='text-center mt-3'>
            <FontAwesomeIcon className='text-2xl me-3' icon={faBed} />
            <span className='text-2xl'>: 4/5</span>
          </p>
        <div className='flex justify-between mt-4'>
          <button className='bg-red-500 text-white p-1 px-2 rounded w-full me-3 '>Remove</button>
          <button onClick={handleShow} className='bg-teal-800 text-white p-1 px-2 rounded w-full' >View details</button>
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
