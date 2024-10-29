import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Checkbox from '@mui/material/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { addStudentApi, deletstudentApi, editstudentApi, getallStudentApi,  } from '../services/allApi';



function People() {
  const [show, setShow] = useState(false);
  const [allstudent,setallstudent] = useState([])
  const [addStatus,setAddStatus] = useState({})
  const [deleteStatus,setdeleteStatus] = useState({})
  const [edit,setEdit] = useState(false)
  const [editstatus,seteditstatus] =useState({})
  const [student,setStudent] = useState({
    name:'',
    mobile:'',
    joinedDate:'',
    room:'',
    fee:'pending'
  });
  const [isMobile,setIsMobile] = useState(true)
  const [isRoom,setIsRoom] = useState(true)

  const getallstudent =async()=>{
   const result = await getallStudentApi()
   console.log(result);
   
   if(result.status>=200 && result.status<300){
    setallstudent(result.data)
   }
  }
  useEffect(()=>{
    getallstudent()
  },[addStatus,deleteStatus,editstatus]) 
  console.log(allstudent);
  
  console.log(student);

  const validate =(e)=>{
    if(!!e.target.value.match('^[0-9]*$')){
      if(e.target.name=='mobile'){
        setStudent({...student,mobile : e.target.value})
        setIsMobile(true)
      }else if(e.target.name=='room'){
        setStudent({...student,room : e.target.value})
        setIsRoom(true)
      }
    }else{
      if(e.target.name=='mobile'){
        setStudent({...student,mobile : e.target.value})
        setIsMobile(false)
      }else if(e.target.name=='room'){
        setStudent({...student,room : e.target.value})
        setIsRoom(false)
      }
    }
  }
  
  const handleAdd = async()=>{
    const {name , mobile , joinedDate , room}=student
    if (!name || !mobile || !joinedDate || !room) {
      alert("please fill the form")
    }else{
      const result = await addStudentApi(student)
      console.log(result);
      if(result.status>=200 && result.status<300){
        alert('video uploaded successfully')
        handleClose()
        setAddStatus(result.data)
      }else{
      alert('something went wrong')
        handleClose()
      }

    }
  }

  const handleClear = () =>{
    setStudent({
      name:'',
      mobile:'',
      joinedDate:'',
      room:'',
      fee:'pending'
    });
    setIsMobile(true)
    setIsRoom(true)
  }
 const handleremove = async(id)=>{
  const result = await deletstudentApi(id)
  if(result.status>=200 && result.status<300){
    alert('Deleted Succesfully')
    setdeleteStatus(result.data)
  }
  else{
    alert('something went wrong')
  }
 }
 const handleEdit =(item)=>{
  handleShow()
  setEdit(true)
  setStudent(item)
 }
  const handleCheckbox = (e)=>{
    if (e.target.checked) {
      setStudent({...student,fee : 'payed'})
    }else{
      setStudent({...student,fee : 'pending'})
    }
  }
  const handleClose = () => {
    setShow(false);
    setEdit(false);
    handleClear()
  }
  const handleShow = () => setShow(true);

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handlechange=async()=>{
    const {name , mobile , joinedDate , room}=student
    if (!name || !mobile || !joinedDate || !room) {
      alert("please fill the form")
    }
    else{
      const result = await editstudentApi(student.id,student)
      console.log(result);
      if(result.status>=200 && result.status<300){
        alert('Deleted Succesfully')
        seteditstatus(result.data)
        handleClose()
      }
      else{
        alert('something went wrong')
      }
    }
  }
  return (
    <div className='p-5'>
      <div className=' flex justify-between p-1 mb-4 pe-2'>
        <button onClick={handleShow} className='bg-green-400 text-white items-center p-2 px-5'>Add</button>
        <p className='text-xl'>Total no of hostlers : <span className='font-bold'>{allstudent.length}</span></p>
      </div>
     <table className='w-full '> 
      <thead className='text-center border border-5 border-white bg-slate-500 text-white'>
        <tr className=''>
          <th className='p-3 border border-s-5 border-white'>Name</th>
          <th className='p-3 border border-s-5 border-white'>Mobile no</th>
          <th className='p-3 border border-s-5 border-white'>Joined date</th>
          <th className='p-3 border border-s-5 border-white'>Fees</th>
          <th className='p-3 border border-s-5 border-white'>Room no</th>
          <th className='p-3 border border-s-5 border-white'></th>
        </tr>
      </thead>
      <tbody className='bg-slate-300 border border-5 border-white' >
        {allstudent?.length > 0 && allstudent?.map((item)=><tr>
          <td className='p-3 border border-s-5 border-white'><img src="" alt="" />{item?.name}</td>
          <td className='p-3 border border-s-5 border-white'>{item?.mobile}</td>
          <td className='p-3 border border-s-5 border-white'>{item?.joinedDate}</td>
          <td className='p-3 border border-s-5 border-white'>{item?.fee=='payed' ? <span className='text-green-500'>Payed</span> : <span className='text-orange-500'>Pending</span>}</td>
          <td className='p-3 border border-s-5 border-white'>4</td>
          <td className='p-3 border border-s-5 border-white'>
            <button onClick={()=>{handleremove(item?.id)}} className='bg-red-500  px-2 py-1 me-5 rounded-sm'>Remove <FontAwesomeIcon  icon={faTrash} /></button>
           <button onClick={()=>{handleEdit(item)}} className='bg-blue-500 px-2 py-1 rounded-sm'> Edit <FontAwesomeIcon icon={faPenToSquare} /></button>
           </td>
        </tr>)
          }
      </tbody>
     </table>
     <Modal show={show} onHide={handleClose} className=''>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" name='name' onChange={(e)=>{setStudent({...student,name : e.target.value})}} value={student.name} className='form-control  ' placeholder='Name' />
          <input type="text" name='mobile' onChange={(e)=>{validate(e)}} value={student.mobile} className='form-control mt-3' placeholder='Mobile' />
          {!isMobile && <span className='text-red-500'>Invalid value</span>}
          <input type="date" name='date' onChange={(e)=>{setStudent({...student,joinedDate : e.target.value})}} value={student.joinedDate} className='form-control mt-3' placeholder='joined date' />
          
          <span className='ms-2'>Fee :<Checkbox {...label} defaultChecked={student.fee=='payed'?true:false} checked={student.fee=='payed'?true:false} onChange={(e)=>{handleCheckbox(e)}} color="success" />{student.fee=='payed' ? <span className='text-green-500'>Payed</span> : <span className='text-orange-500'>Pending</span>}</span>
          <input type="text" name='room' onChange={(e)=>{validate(e)}} value={student.room} className='form-control mt-3' placeholder='Room no' />{!isRoom && <span className='text-red-500'>Invalid value</span>}
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClear}>
            Clear
          </Button>
          {edit?<Button disabled={isMobile && isRoom ? false:true} onClick={handlechange} variant="primary" >
            Save Changes
          </Button>:<Button disabled={isMobile && isRoom ? false:true} variant="primary" onClick={handleAdd}>
            Add
          </Button>}
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default People
