import React, { useState } from 'react'


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Checkbox from '@mui/material/Checkbox';
import { addstdtoroomApi, editstudentApi } from '../services/allApi';
import Select from 'react-select'

function Person({student,room,allroom,setChageRoomStatus}) {
  
  const [show, setShow] = useState(false);
  const [payment,setpayment] =useState(student.fee)
  const [option,setOption]= useState({ value: student.room ,label: student.room })
  //  console.log(payment);
   
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
  const reqbody = {...student,fee:payment}
  const result =  await editstudentApi(student.id,reqbody)

  const selectedroom = room
  const selectedstdindex = room.students.findIndex((item)=>item.id==student.id)
  console.log(selectedstdindex);
  
  selectedroom.students.splice(selectedstdindex,1,{...student,fee:payment})
  const result2 = await addstdtoroomApi(room.id,selectedroom)
  console.log(result2);
  
  console.log(result);
  
 }

 const options = allroom?.length>0 ? allroom.map((item)=>({ value: item.roomNo, label: item.roomNo })) : ({})

 const selectChange =(option)=>{
  setOption(option)
}
const handleRoomChange = async()=>{
  if(room.roomNo==option.value){
    alert('already in that room')
  }else{
    const selectedroom = allroom?.find((item)=>item.roomNo==option.value)
      console.log(selectedroom);
    if(selectedroom.capacity-selectedroom.students.length>0){


      const oldrooms = allroom?.find((item)=>item.roomNo==room.roomNo)
      const stdindex = oldrooms.students.findIndex((item)=>item.id==student.id)
      oldrooms.students.splice(stdindex,1)
      const result1 = await addstdtoroomApi(oldrooms.id,oldrooms)


      selectedroom.students.push(student)
      
      
      const reqbody = selectedroom
      console.log(reqbody);

      const result2 = await addstdtoroomApi(selectedroom.id,reqbody)


      const result = await editstudentApi(student.id,{...student,room:option.value})
    console.log(result);
    if(result.status>=200 && result.status<300 && result1.status>=200 && result1.status<300 && result2.status>=200 && result2.status<300){
      alert('room changed Succesfully')
      setChageRoomStatus(result.data)
      handleClose()
    }
    else{
      alert('something went wrong')
        handleClose()
    }
    }else{
      alert('room is full')
    }
  }
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
      
      <button onClick={handleShow} className='bg-teal-800 text-white p-1 px-2 rounded '>Change Room</button>
      <button onClick={handlesavechange} className='bg-blue-600 text-white p-1 px-2 rounded '>
            Save Changes
      </button>
     </div>
      </div>
      </div>
      <Modal show={show} onHide={handleClose} className=''>
        <Modal.Header closeButton>
          <Modal.Title>Change Room</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Select options={options} value={option} placeholder={'Room no'} onChange={selectChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="primary" onClick={handleRoomChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Person
