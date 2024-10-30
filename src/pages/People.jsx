import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Checkbox from '@mui/material/Checkbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { addstdtoroomApi, addStudentApi, deletstudentApi, editstudentApi, getallStudentApi, getRoomApi,  } from '../services/allApi';
import Select from 'react-select'



function People() {
  const [show, setShow] = useState(false);
  const [allstudent,setallstudent] = useState([])
  const [addStatus,setAddStatus] = useState({})
  const [deleteStatus,setdeleteStatus] = useState({})
  const [edit,setEdit] = useState(false)
  const [oldroom,setOldroom] = useState('')
  const [stdId,setStdId] =useState('')
  const [editstatus,seteditstatus] =useState({})
  const [student,setStudent] = useState({
    name:'',
    mobile:'',
    joinedDate:'',
    room:'',
    fee:'pending'
  });
  const [isMobile,setIsMobile] = useState(true)
  const [allroom, setallroom] = useState([])
  const [option, setOption] = useState({})
  const getallstudent =async()=>{
   const result = await getallStudentApi()
   console.log(result);
   
   if(result.status>=200 && result.status<300){
    setallstudent(result.data)
   }
  }
  useEffect(()=>{
    getallstudent()
    getroom()
  },[addStatus,deleteStatus,editstatus]) 
  console.log(allstudent);
  
  console.log(student);


  const validate =(e)=>{
    if(!!e.target.value.match('^[0-9]*$')){
      if(e.target.name=='mobile'){
        setStudent({...student,mobile : e.target.value})
        setIsMobile(true)
      }
    }else{
      if(e.target.name=='mobile'){
        setStudent({...student,mobile : e.target.value})
        setIsMobile(false)
      }
    }
  }
  
  const handleAdd = async()=>{
    const {name , mobile , joinedDate , room}=student
    if (!name || !mobile || !joinedDate || !room) {
      alert("please fill the form")
    }else{
      const selectedroom = allroom.find((item)=>item.roomNo==room)
      console.log(selectedroom);
      
      if(selectedroom.capacity-selectedroom.students.length>0){
        
        let stdId=1

        if (allstudent.length>0) {
          stdId = allstudent[allstudent?.length-1].id+1
        }

        selectedroom.students.push({...student,id:stdId})
        
        
        const reqbody = selectedroom
        console.log(reqbody);

        const result1 = await addstdtoroomApi(selectedroom.id,reqbody)
        
          const result = await addStudentApi(student)

        if(result.status>=200 && result.status<300 && result1.status>=200 && result1.status<300){
          alert('video uploaded successfully')
          handleClose()
          setAddStatus(result.data)
        }else{
          alert('something went wrong')
          handleClose()
        }
      }else{
        alert("Room is full")
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
    setOption({})
    setOldroom('')
    setStdId('')
  }
  // console.log(option);
  
 const handleremove = async(student)=>{

  console.log(student.id);
  
  const selectedroom = allroom?.find((item)=>item.roomNo==student.room)
  console.log(selectedroom);
  const stdindex = selectedroom.students.findIndex((item)=>item.id==student.id)
  console.log(stdindex);
  
  selectedroom.students.splice(stdindex,1)
  const result1 = await addstdtoroomApi(selectedroom.id,selectedroom)
  console.log(result1)
  const result = await deletstudentApi(student.id)
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
  setOldroom(item.room)
  setStdId(item.id)
  setOption({ value: item.room ,label: item.room })
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
      const selectedroom = allroom?.find((item)=>item.roomNo==room)
      console.log(selectedroom);
      if(selectedroom.capacity-selectedroom.students.length>0){


        const oldrooms = allroom?.find((item)=>item.roomNo==oldroom)
        const stdindex = oldrooms.students.findIndex((item)=>item.id==stdId)
        oldrooms.students.splice(stdindex,1)
        const result1 = await addstdtoroomApi(oldrooms.id,oldrooms)


        selectedroom.students.push({...student,id:stdId})
        
        
        const reqbody = selectedroom
        console.log(reqbody);

        const result2 = await addstdtoroomApi(selectedroom.id,reqbody)


        const result = await editstudentApi(student.id,student)
      console.log(result);
      if(result.status>=200 && result.status<300){
        alert('Deleted Succesfully')
        seteditstatus(result.data)
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
  const getroom =async()=>{
    const result = await getRoomApi()
    // console.log(result);
    
    if(result.status>=200 && result.status<300){
      setallroom(result.data)
     
     
      
    } 
   }
   console.log(allroom);
   const options = allroom?.length>0 ? allroom.map((item)=>({ value: item.roomNo, label: item.roomNo })) : ({})
  const selectChange =(option)=>{
    setOption(option)
    setStudent({...student,room : option.value})
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
          <td className='p-3 border border-s-5 border-white'>{item?.room}</td>
          <td className='p-3 border border-s-5 border-white'>
            <button onClick={()=>{handleremove(item)}} className='bg-red-500  px-2 py-1 me-5 rounded-sm'>Remove <FontAwesomeIcon  icon={faTrash} /></button>
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
          <Select options={options} value={option} placeholder={'Room no'} onChange={selectChange}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClear}>
            Clear
          </Button>
          {edit?<Button disabled={isMobile ? false:true} onClick={handlechange} variant="primary" >
            Save Changes
          </Button>:<Button disabled={isMobile ? false:true} variant="primary" onClick={handleAdd}>
            Add
          </Button>}
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default People
