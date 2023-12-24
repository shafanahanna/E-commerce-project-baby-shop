import React from "react";
import { Container } from "react-bootstrap";
import { FaArrowAltCircleRight,  } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

 

const Testimonials = () => {
  return (
    <Container className=" mt-5 mb-4">
    
      <section style={{color: "#000", backgroundColor: "#f3f2f2"}}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-xl-8 text-center">
            {/* <svg
              xmlns=""
              width="46"
              height="46"
              fill="Red"
              className="heart"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015Zm6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343ZM7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358Z"
              />
            </svg> */}
              <h3 className="fw-bold mb-4 mt-4"><span style={{color:"black"}}>Why they </span><span style={{color:"black"}}>Love us</span><span style={{color:"deeppink"}}></span><span><FaArrowAltCircleRight /></span></h3>
              
              <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                error amet numquam iure provident voluptate esse quasi,
                veritatis totam voluptas nostrum quisquam eum porro a pariatur
                veniam.
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://images.unsplash.com/profile-fb-1509026921-e281c2b5f3da.jpg?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                      alt="pic2"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="font-weight-bold">JULIUS WINTER</h5>
                    
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <br/>
                  <p className="mb-2">
                    <i style={{color:"#Ee222a"}} className="fas fa-quote-left pe-2"></i>“Ultrices nisl tincidunt porttitor sed odio nulla a, amet aliquam tempor interdum neque, ut gravida magna massa auctor sed pretium.”
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://babymoo.in/cdn/shop/files/PHOTO-2022-01-22-19-12-16_360x_47435b4c-e6fd-4857-934a-03208dc473cf.webp?v=1652098392&width=100"
                      alt="pic"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="font-weight-bold">EMMA HART</h5>
                     
                  <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <br/>
                   
                  <p className="mb-2">
                    <i style={{color:"#Ee222a"}} className="fas fa-quote-left pe-2"></i>“Massa amet, at dolor tellus pellentesque aenean in eget massa tincidunt habitasse volutpat adipiscing sed id sit auctor eu vivamus nulla.”
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-0">
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://www.thebabycotshop.com/cdn/shop/files/istockphoto-1154642632-612x612_large.jpg?v=1658166022"
                      alt="pic1"
                      className="rounded-circle shadow-1-strong"
                      width="100"
                      height="100"
                    />
                  </div>
                  <h5 className="font-weight-bold">JULIA STONE</h5>
                  
                  <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <br/>

                  <p className="mb-2">
                    <i style={{color:"#Ee222a"}} className="fas fa-quote-left pe-2"></i>Cras sit amet nibh
                    libero, in gravida nulla metus scelerisque ante sollicitudin
                    commodo cras purus odio, vestibulum in tempus viverra
                    turpis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Testimonials;