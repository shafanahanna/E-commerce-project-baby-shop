import React, { useContext } from 'react';
import { Navbar, Nav, Container,NavDropdown} from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Data } from '../MainRouter';
import { Form ,} from 'react-bootstrap';
import './Navbar.css';
import { BiSolidBabyCarriage } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";





const Navbar2 = () => {
  const navigate = useNavigate();
  const { login, setLogin,setSearch,loginuser,setcart} = useContext(Data);

  const logout = () => {
    setcart([])
    setLogin(false);
    navigate('/');
    toast.error('You have logged out');
    console.log(loginuser);
  };

  const carticon = () => {
    if (login) {
      navigate('/cart');
    } else {
      toast.error('Please Login');
    }
  };

   

  return (
    <div>
      <Navbar expand="lg" className="body-primary ">
        <Container fluid>
          <Navbar.Brand href="/" className="company-logo">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/015/393/872/small/cute-baby-for-baby-shop-icon-logo-design-with-love-symbol-concept-illustration-vector.jpg" alt='Logo' className='logo'></img>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'deeppink',  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>Baby</span>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: 'skyblue', fontFamily: 'cursive' }}>Que</span>
        
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          

          <Navbar.Collapse id="responsive-navbar-nav"  >
    

        
            <Nav className="me-auto my-2 my-lg-0 fw-bold mb-8" style={{ maxHeight: '50px' }} navbarScroll variant="black">
            
            <Nav.Link onClick={()=>navigate('/')}>HOME</Nav.Link>
             <Nav.Link onClick={()=>navigate('/shop')}>SHOP</Nav.Link>
             <NavDropdown title="CLOTHES" id="responsive-nav">
              <NavDropdown.Item onClick={()=>navigate('/clothes')}>All</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate('/boy')}>Boy</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>navigate('/girl')}>Girl</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
              onClick={() => {
                navigate("/toys");
              }}>
              <p>TOYS</p>
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/nutrition");
              }}>
              <p>NUTRITION</p>
            </Nav.Link>
          
              
            </Nav>

            <Form className="d-flex">
             <Form.Control
              type="search"
               placeholder="Search here...."
               className="me-2 "
               aria-label="Search"
               onChange={(evt)=>setSearch(evt.target.value)} >
            </Form.Control>

           <FaSearch onClick={()=>navigate('/search')}  className='search'/>
              </Form>


            <Nav className="d-flex my-3 nav-left  fw-bold" navbarScroll>
              {login === false ? (
                <Nav.Link className="text-black" onClick={() => navigate('/login')}>
                  Login
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link className="text-success">{loginuser.userName}
                    <CgProfile />
                 </Nav.Link>
                 <Nav.Link className="text-danger" onClick={logout}>
                  Logout
                  </Nav.Link> 
                  
                  </>
                  
              )}
              
            
            <BiSolidBabyCarriage style={{ width: '2rem', height: '2rem', marginLeft: '1rem', cursor: 'pointer' }} onClick={carticon}/>
            

            
            <RiAdminLine style={{ width: '2rem', height: '2rem', marginLeft: '1rem', cursor: 'pointer' }} onClick={() => navigate('/adminlogin')}  />

             </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar2;