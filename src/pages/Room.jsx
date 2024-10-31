import React, { useEffect, useState } from 'react'
import Roomc from '../components/Roomc'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addRoomApi, getRoomApi } from '../services/allApi';



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
      alert("please fill the form")
    }
    else{
      if(allroom.some((item)=>item.roomNo==roomNo)){
        alert('room already exist')
      }else{
        const result = await addRoomApi(room)
      if(result.status>=200 && result.status<300){
        alert('Room added successfully')
        handleClose()
        setaddroomstatus(result.data)
      }else{
      alert('something went wrong')
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
     <div className='flex justify-between p-5  pe-5'>
        <button onClick={handleShow} className='bg-green-400 text-white items-center p-2 px-5'>Add</button>
        <p className='text-xl'>Total no of Room : <span className='font-bold'>{allroom.length}</span></p>
      </div>
      <div className='md:grid gap-4 grid-cols-[repeat(4,1fr)] py-10 px-3'>
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


   </>
  )
}

export default Room
