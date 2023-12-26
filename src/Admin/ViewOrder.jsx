import React, { useContext } from 'react';
import { Data } from '../components/MainRouter';

import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer,  MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import SideBar from '../components/Sidebar';

const Vieworder = () => {
  const { vieworder,userData } = useContext(Data);

  return (
    <div className='d-flex'>
      <div>
        <SideBar/>
      </div>

      <div>
        <section className="navu h-100" style={{ backgroundColor: '#eee' }}>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol md="10">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
                   {(vieworder.length)<=0?(
                    <h1>No Order Yet....</h1>
                   ):
                   <h1>ProductsDetails</h1>}
                  </MDBTypography>
                  <div>
                    <p className="mb-0">
                      <span className="text-warning"> </span>
                      <a href="#!" className="text-danger">
                        <i className="fas fa-angle-down mt-1"></i>
                      </a>
                    </p>
                  </div>
                </div>

                {vieworder.map((item) => (
                  <MDBCard key={item.Id} className="rounded-3 mb-4">
                    <MDBCardBody className="p-4">
                      <MDBRow className="justify-content-between align-items-center">
                        <MDBCol md="12" lg="6" xl="4">
                          <MDBCardImage className="rounded-3" fluid src={item.Image} alt="products" />
                        </MDBCol>
                        <MDBCol md="12" lg="6" xl="8">
                          <p className="lead fw-normal mb-2">{item.ProductName}</p>
                          <p>
                            {userData.map((item)=>(
                              <> 
                              <span className="text-muted">user </span>  {item.userName} {" "}
                            <span className="text-muted">Color: </span>Grey
                            </>
                            ))}
                            
                          </p>
                        </MDBCol>
                        <MDBCol
                          md="12"
                          lg="6"
                          xl="4"
                          className="d-flex align-items-center justify-content-around"
                        >
                          <MDBTypography tag="h5" className="mb-0">
                            <b>Price </b> {item.newPrice}
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="12" lg="6" xl="4" className="offset-lg-1">
                          <MDBTypography tag="h5" className="mb-0 text-danger">
                            <b>qty</b> {item.qty}
                          </MDBTypography>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                ))}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
    </div>
  );
};

export default Vieworder;