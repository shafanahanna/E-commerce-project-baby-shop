import React, { useContext } from 'react';


import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import { Data } from '../components/MainRouter';
import SideBar from '../components/Sidebar';

const Users = () => {
  const { userData } = useContext(Data);

  return (
    <div style={{textAlign:'center'}}>
      {userData.length<=0?<h1>No User Found</h1>:<h1>User Details</h1>}
    <div className='d-flex'>
      <div>
        <SideBar/>
      </div>

      <div className='w-100'>
        <div className='table-responsive'>
          <MDBTable responsive='sm' striped bordered>
            <MDBTableHead>
              <tr>
                <th scope='col'></th>
                <th scope='col'>Username</th>
                <th scope='col'>E-Mail</th>
                <th scope='col'>Password</th>
                
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {userData.map((item) => (
                <tr key={item.userId}>

                <td>
                    <div className='d-flex align-items-center'>
                      <img
                        src='https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg'
                        alt=''
                        style={{ width: '45px', height: '45px' }}
                        className='rounded-circle'
                      />
                    </div>
                  </td>
                  <td>{item.userName}</td>
                  <td>{item.emailId}</td>
                  <td>{item.password}</td>
                  </tr>
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
     </div>
    
    
    </div>
  );
};

export default Users;