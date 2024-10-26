import axios from "axios"

export const commonApi = async(httpMethod,url,reqBody)=>{
  const reqConfig={
    method:httpMethod,
    url,
    data:reqBody,
    headers: {"content-Type": "application/json"}
  }
  return await axios(reqConfig).then((result)=>{
    return result
  }).catch((error)=>{
    return error
  })
}