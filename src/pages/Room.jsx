import React, { useState } from 'react'
import Roomc from '../components/Roomc'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function Room() {
  const [show, setShow] = useState(false);
  const [isRoom, setIsRoom]=useState(true)
  const [isCapacity, setIscapacity]=useState(true)
  const [room, setRoom] = useState({
    roomNo:'',
    capacity:'',
    students:[]
  })
  console.log(room);
  const handleClear = () => {
    setRoom({
      roomNo:'',
      capacity:'',
      students:[]
    })
  }
  const handleClose = () => {
    setShow(false);
    handleClear()
  }
  const validate = (e) => {
    if(!!e.target.value.match('^[0-9]*$')){
      if(e.target.name=='room'){
        setRoom({...room,roomNo : e.target.value})
        setIsRoom(true)
      }else if(e.target.name=='capacity'){
        setRoom({...room,capacity : e.target.value})
        setIscapacity(true)
      }
    }else{
      if(e.target.name=='room'){
        setRoom({...room,roomNo : e.target.value})
        setIsRoom(false)
      }else if(e.target.name=='capacity'){
        setRoom({...room,capacity : e.target.value})
        setIscapacity(false)
      }
    }
  }
  const handleShow = () => setShow(true);
  return (
   < >
     <div className='flex justify-between p-5  pe-5'>
        <button onClick={handleShow} className='bg-green-400 text-white items-center p-2 px-5'>Add</button>
        <p className='text-xl'>Total no of Room : <span className='font-bold'>100</span></p>
      </div>
      <div className='md:grid gap-4 grid-cols-[repeat(4,1fr)] py-10 px-3'>
        <div className='md:mt-0 mt-2'>
          <Roomc/>
        </div>
        <div className='md:mt-0 mt-2'>
          <Roomc/>
        </div>
        <div className='md:mt-0 mt-2'>
          <Roomc/>
        </div>
        <div className='md:mt-0 mt-2'>
          <Roomc/>
        </div>
    </div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>A Room</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input name='room' className='form-control' onChange={(e)=>{validate(e)}} value={room.roomNo} placeholder='Room no:' type="text" />
        {!isRoom && <span className='text-red-500'>Invalid Value</span>}
        <input name='capacity' className='form-control mt-3' onChange={(e)=>{validate(e)}} value={room.capacity} placeholder='capacity:' type="text" />
        {!isCapacity && <span className='text-red-500'>Invalid Value</span>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClear}>
          Clear
        </Button>
        <Button disabled={isCapacity && isRoom ? false : true} variant="primary" onClick={handleClose}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
   </>
  )
}

export default Room
