import React, { useEffect, useState } from 'react'
import Roomc from '../components/Roomc'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addRoomApi, getRoomApi } from '../services/allApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



function Room() {
  const [show, setShow] = useState(false);
  const [addroomstatus,setaddroomstatus] = useState([])
  const [allroom, setallroom] = useState([])
  const [isRoom, setIsRoom]=useState(true)
  const [isCapacity, setIscapacity]=useState(true)
  const [changeRoomStatus,setChageRoomStatus]=useState({})
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
    setIsRoom(true)
    setIscapacity(true)
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

  const handleAdd = async()=>{
    const {roomNo , capacity }= room
    if (!capacity || !roomNo) {
      toast.info("please fill the form")
    }
    else{
      if(allroom.some((item)=>item.roomNo==roomNo)){
        toast.warning('room already exist')
      }else{
        const result = await addRoomApi(room)
      if(result.status>=200 && result.status<300){
        toast.success('Room added successfully')
        handleClose()
        setaddroomstatus(result.data)
      }else{
      toast.error('something went wrong')
        handleClose()
      }
      }
      
    }
  }

 const getroom =async()=>{
  const result = await getRoomApi()
  console.log(result);
  
  if(result.status>=200 && result.status<300){
    setallroom(result.data)
    
   
    
  } 
 }
 console.log(allroom);
 useEffect(()=>{
  getroom()
},[addroomstatus,changeRoomStatus]) 

  return (
   < >
   <h1 className=' text-center mt-5'>Rooms</h1>
     <div className=' md:flex  justify-between items-cente p-4 px-md-5'>
        <div >
          
          <p className='text-xl py-md-2'>Total no of Room : <span className='font-bold'>{allroom.length}</span></p>
          <button onClick={handleShow} className='bg-green-400 text-white items-center p-2 px-5'>Add</button>
        </div>
        <div className='flex items-center'>
         <Link to={'/home'}> <button className='btn px-0  fs-5 text-success'> <FontAwesomeIcon icon={faArrowLeft} className='me-2' />  Back Home </button></Link>
        </div>
      </div>
      <div className='md:grid gap-4 grid-cols-[repeat(4,1fr)] md:py-8 pb-5 px-md-5 px-3'>
        {allroom.length>0 && 
        allroom.map((item)=>(
          <div className='md:mt-0 mt-2'>
          <Roomc room={item} allroom={allroom} setChageRoomStatus={setChageRoomStatus}/>
        </div>
        ))}
        
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
        <Button disabled={isCapacity && isRoom ? false : true} variant="primary" onClick={handleAdd}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>

    <ToastContainer 
      position="top-center"
      autoClose={2000} 
      theme='colored'/>
   </>
  )
}

export default Room
