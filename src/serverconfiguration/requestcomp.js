import axios from 'axios'
export async  function getRequest(url,controller)
{

   return await axios.get(url+controller)
   

}