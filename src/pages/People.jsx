import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Checkbox from '@mui/material/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { addStudentApi } from '../services/allApi';
import { green, orange } from '@mui/material/colors';



function People() {
  const [show, setShow] = useState(false);
  const [checkboxStatus, setCheckboxStatus] = useState(false)
  const [student,setStudent] = useState({
    name:'',
    mobile:'',
    joinedDate:'',
    room:'',
    fee:'pending'
  });
  console.log(student);
  
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
      }else{
        toast.warning('something went wrong')
        handleClose()
      }

    }
  }

  const handleClear = () =>{
    setCheckboxStatus(false)
    setStudent({
      name:'',
      mobile:'',
      joinedDate:'',
      room:'',
      fee:'pending'
    });
  }
  const handleCheckbox = (e)=>{
    setCheckboxStatus(e.target.checked)
    if (e.target.checked) {
      setStudent({...student,fee : 'payed'})
    }else{
      setStudent({...student,fee : 'pending'})
    }
  }
  const handleClose = () => {
    setShow(false);
    handleClear()
  }
  const handleShow = () => setShow(true);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className='p-5'>
      <div className=' flex justify-between p-1 mb-4 pe-2'>
        <button onClick={handleShow} className='bg-green-400 text-white items-center p-2 px-5'>Add</button>
        <p className='text-xl'>Total no of hostlers : <span className='font-bold'>100</span></p>
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
        <tr>
          <td className='p-3 border border-s-5 border-white'><img src="" alt="" /> neeee</td>
          <td className='p-3 border border-s-5 border-white'>8686868686</td>
          <td className='p-3 border border-s-5 border-white'>10/9/9</td>
          <td className='p-3 border border-s-5 border-white'>pending</td>
          <td className='p-3 border border-s-5 border-white'>4</td>
          <td className='p-3 border border-s-5 border-white'>
            <button className='bg-red-500  px-2 py-1 me-5 rounded-sm'>Remove <FontAwesomeIcon  icon={faTrash} /></button>
           <button onClick={handleShow} className='bg-blue-500 px-2 py-1 rounded-sm'> Edit <FontAwesomeIcon icon={faPenToSquare} /></button>
           </td>
        </tr>
      </tbody>
     </table>
     <Modal show={show} onHide={handleClose} className=''>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" onChange={(e)=>{setStudent({...student,name : e.target.value})}} value={student.name} className='form-control  ' placeholder='Name' />
          <input type="text" onChange={(e)=>{setStudent({...student,mobile : e.target.value})}} value={student.mobile} className='form-control mt-3' placeholder='Mobile' />
          <input type="date" onChange={(e)=>{setStudent({...student,joinedDate : e.target.value})}} value={student.joinedDate} className='form-control mt-3' placeholder='Date' />
          <span className='ms-2'>Fee :<Checkbox {...label} defaultChecked={false} onChange={(e)=>{handleCheckbox(e)}} color="success" />{checkboxStatus ? <span className='text-green-500'>Payed</span> : <span className='text-orange-500'>Pending</span>}</span>
          <input type="text" onChange={(e)=>{setStudent({...student,room : e.target.value})}} value={student.room} className='form-control mt-3' placeholder='Room no' />
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClear}>
            Clear
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default People
