import { serverUrl } from "./serverUrl"
import { commonApi } from "./commonApi"

export const addStudentApi=async(reqBody)=>{
  return await commonApi('POST',`${serverUrl}/student`,reqBody)
}