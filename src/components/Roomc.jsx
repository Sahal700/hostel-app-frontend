import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Person from './Person';
import { deletRoomApi, editstudentApi } from '../services/allApi';



function Roomc({room,allroom,setChageRoomStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const deleteroom = async () => {
    for (const item of room.students) {
      console.log(item.id);
      
    const result =  await editstudentApi(item.id, {...item, room:""});
    console.log(result);
    
    }
    const result =await deletRoomApi(room.id)
    if(result.status>=200 && result.status<300){
      setChageRoomStatus(result.data)
    }
  };
  
  return (
    <>
      <div className='bg-[#92ddfd62] p-5 rounded'>
          <div className='text-center'>
            <h4 className='text-3xl '>room no: <span className='font-semibold'>{room.roomNo}</span></h4>
            
            </div>
          <p className='text-center mt-3'>
            <FontAwesomeIcon className='text-2xl me-3' icon={faBed} />
            <span className='text-2xl'>: {room.students.length}/{room.capacity}</span>
          </p>
        <div className='flex justify-between mt-4'>
          
          <button onClick={handleShow} className='bg-teal-800 text-white p-1 me-3  rounded w-full' >View details</button>
          <button onClick={deleteroom} className='bg-red-500 text-white p-1  rounded w-full '>Delete Room</button>

        </div>
      </div>

      <Modal show={show} onHide={handleClose} className=''>
        <Modal.Header closeButton>
          <Modal.Title>Room no: {room.roomNo}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {room.students.length>0 ?
           room.students.map((item)=>(
            <Person student={item} allroom={allroom} room={room} setChageRoomStatus={setChageRoomStatus}/>
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
    </>
  );
}

export default Roomc;
