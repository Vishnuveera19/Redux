import React from 'react'
import {connect} from "react-redux"
import { addEntity,viewById } from '../reduxcomp/actions/actionfunctions'
const ViewComponent = (props) => {
    console.log(props.state)
  return (
    <div>

        <button 
        onClick={()=>{
   props.dispatch(viewById(""))
        }}
        >Change State to Add</button>
     {
        props.state.map((e)=>{
            return <li>{e.accountType}</li>
        })
     }
    </div>
  )
}
const mapStateToProps=(state)=>({state:state})
const mapDispatchToProps=(dispatch)=>({dispatch:dispatch})
export default connect(mapStateToProps,mapDispatchToProps)(ViewComponent)