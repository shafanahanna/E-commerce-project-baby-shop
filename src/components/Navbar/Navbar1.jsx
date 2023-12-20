
import { useNavigate, } from 'react-router-dom';
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { Data } from '../MainRouter';
import { AiOutlineShoppingCart } from 'react-icons/ai';



function Navbar1() {
   const { login,setLogin,setcart,setSearch } = useContext(Data)
    const navigate=useNavigate()

    const handleLogout = ()=>{
      setLogin(false)
      setcart([])
    };
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/015/393/872/small/cute-baby-for-baby-shop-icon-logo-design-with-love-symbol-concept-illustration-vector.jpg" alt='Logo' className='logo'></img>
    
        <span style={{color:'deeppink', fontWeight:'200px'}}>Baby</span><span style={{color:'darkblue'}}>Que</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}>
            
          
             <Nav.Link href="/">HOME</Nav.Link>
             <Nav.Link href="/shop">SHOP</Nav.Link>
             <NavDropdown title="CLOTHES" id="responsive-nav">
              <NavDropdown.Item href="/clothes">All</NavDropdown.Item>
              <NavDropdown.Item href="/boy">Boy</NavDropdown.Item>
              <NavDropdown.Item href="/girl">Girl</NavDropdown.Item>
              </NavDropdown>
             
        
        
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            
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
              
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(evt)=>setSearch(evt.target.value)} >
            </Form.Control>

            <Button className='m-3 mx-2' variant='outline-secondary' style={{borderRadius:'1px gray solid'}} type='submit'>Search</Button>

             </Form>

             { login ? (
             <>
              
              <Nav.Link style={{fontSize:'1.2em'}} className='m-1' onClick={handleLogout}>Logout</Nav.Link>
              </>
             ) :(
              <>
              <Nav.Link style={{fontSize:'1.2em'}} className='m-1' onClick={()=>{navigate('/login')}}></Nav.Link>
              </>
             )}
             <p className='m-1'>|</p>
             <Nav.Link className='m-1 mx-' onClick={('/Cart')}>
              <AiOutlineShoppingCart style={{fontSize:'1.3em'}} />
             </Nav.Link>  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;