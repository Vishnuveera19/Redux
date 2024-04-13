import { ADDENTITY,DELETEENTITY,UPDATEENTITY,VIEWBYID } from "./action";
import { getRequest } from "../../serverconfiguration/requestcomp";
import { ServerConfig } from "../../serverconfiguration/serverconfig";
import { PAYMEMPLOYEE } from "../../serverconfiguration/controllers";
export function addEntity(data)
 {

    
    return{
        payload:data,
        type:ADDENTITY
    }
 }
export function updateEntity(data)
{
    return {
        payload:data,
        type:UPDATEENTITY
    }
}
export function deleteEntity(data)
{
    return  {
        payload:data,
        type:DELETEENTITY
    }
}
export  function viewById(data)
 {
    console.log(ServerConfig)
    
     
    return async (dispatch)=>{
      const result=await getRequest(ServerConfig.url,PAYMEMPLOYEE)
      dispatch({
        payload: result.data,
        type:VIEWBYID
      })
    }
 }