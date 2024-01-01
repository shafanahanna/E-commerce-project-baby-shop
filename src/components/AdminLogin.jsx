import React, { useContext, useRef } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import {  toast } from 'react-hot-toast'



const AdminLogin = () => {
  
  const navigate=useNavigate();
  const user=useRef();
  const pass=useRef();

 const save=()=>{
 const username=user.current.value;
 const password=pass.current.value;
 if(username ==="hanna" && password  === "12345"){
navigate("/adminhome")
toast.success('login sucessfully')

 }else{
  toast.error("Username or password is incorrect")
 }
 }
  return (
    <div>
      
  <div className='d-flex justify-content-center ' >

 <div  className='shadow p-3 mb-5 bg-white rounded m-3   ' style={{width:"25rem", height:"55vh", margin:"auto" ,marginTop:"10%"}}>  
 <h1 className='text-dark'>ADMIN LOGIN</h1>
 <input  className='mt-5'   style={{height:"3rem",width:"20rem"}} placeholder='username'  ref={user}   />
 <br/>
  
 <br/>
 <input  type='password'   style={{height:"3rem",width:"20rem"}}  placeholder='password' ref={pass}  />
 <br/>
 <h6  className='mt-3 text-primary'>forget password</h6>

 <Button  className='mt-3'  variant="success"  onClick={save} > Login </Button>
 
 </div>
 
     </div>
    </div>
  )
}

export default AdminLogin
