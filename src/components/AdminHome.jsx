import React, { useContext } from 'react'

import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { Data } from './MainRouter';
import SideBar from './Sidebar';


const AdminHome = () => {
  const{userData,vieworder} =useContext(Data);
const navigate=useNavigate();
  return (
    <div className='d-flex bg-secondary w-100'>
  <div>
  <SideBar/>
  </div>
<div className=' col-3 d-flex  mt-5  '>

<div >
        <Card 
          style={{ width: '15rem' }}
          className="mb-2 m-2 bg-success " 
          onClick={()=>navigate("/users")} 
        >
          <Card.Header>USERS</Card.Header>
          <Card.Body>
            <Card.Title> USERS </Card.Title>
            <Card.Text>
       <h1>  {userData.length} </h1>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>

        <div >
        <Card 
          style={{ width: '15rem' }}
          className="mb-2  m-2 bg-warning" 
          onClick={()=>navigate("/vieworder")}
        >
          <Card.Header> ORDERS</Card.Header>
          <Card.Body>
            <Card.Title> ORDERS </Card.Title>
            <Card.Text>
       <h1>  {vieworder.length} </h1> 
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
        
        <div >
        <Card 
          style={{ width: '15rem' }}
          className="mb-2  m-2  bg-primary"
        >
          <Card.Header> Delivered</Card.Header>
          <Card.Body>
            <Card.Title> Delivery </Card.Title>
            <Card.Text>
      <h1>  {vieworder.length} </h1>  
             
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
       
</div>


    </div>
  )
}
export default AdminHome