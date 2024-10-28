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
 