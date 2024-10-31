import { serverUrl } from "./serverUrl"
import { commonApi } from "./commonApi"

export const addStudentApi=async(reqBody)=>{
  return await commonApi('POST',`${serverUrl}/student`,reqBody)
}
export const getallStudentApi = async()=>{
  return await commonApi('GET',`${serverUrl}/student`)
}
export const deletstudentApi = async(id)=>{
  return await commonApi('DELETE',`${serverUrl}/student/${id}`)
}
export const editstudentApi =async(id,reqBody)=>{
  return await commonApi('PUT',`${serverUrl}/student/${id}`,reqBody)
}
export const addRoomApi=async(reqBody)=>{
  return await commonApi('POST',`${serverUrl}/rooms`,reqBody)
}
export const getRoomApi = async()=>{
  return await commonApi('GET',`${serverUrl}/rooms`)
}
export const addstdtoroomApi =async(id,reqBody)=>{
  return await commonApi('PUT',`${serverUrl}/rooms/${id}`,reqBody)
}
export const deletRoomApi = async(id)=>{
  return await commonApi('DELETE',`${serverUrl}/rooms/${id}`)
}