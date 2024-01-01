import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

 function Banners() {
  const navigate=useNavigate()
  return (
    <div className='mt-10 p-5'>
    <MDBRow className='row-cols-1 row-cols-md-3 g-4 p-10'>
     
      <MDBCol>
        <MDBCard className='h-100' >
          <MDBCardImage
            src='https://babymoo.in/cdn/shop/products/H168114-2Aimg1.jpg?v=1622114271&width=600'
            alt='...'
            position='top'
            onClick={()=>navigate('/toys')}
          />
          <MDBCardBody>
            <MDBCardTitle >TOYS</MDBCardTitle> 
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100' >
          <MDBCardImage
            src='https://i.pinimg.com/736x/73/4d/aa/734daa059cc7363843e82a6e66475f06.jpg'
            alt='...'
            position='top'
            onClick={()=>navigate('/clothes')}
          />
          <MDBCardBody>
            <MDBCardTitle >CLOTHES</MDBCardTitle>
           
          </MDBCardBody>  
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='h-100' >
          <MDBCardImage
            src='https://www.uyyaala.com/cdn/shop/files/2MOSAIC_MIDDLE_IMAGE.jpg?v=1682577307&width=800/'
            alt='...'
            position='top'
            onClick={()=>navigate('/nutrition')}
          />
          <MDBCardBody>
            <MDBCardTitle >NUTRITION</MDBCardTitle>
            
          </MDBCardBody>
          
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  );
}
export default Banners