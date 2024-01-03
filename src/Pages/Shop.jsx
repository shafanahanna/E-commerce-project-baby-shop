import React, { useContext} from 'react'
import { Button, Card, CardGroup,Row } from 'react-bootstrap'
import { Data } from '../components/MainRouter'
import { useNavigate } from 'react-router-dom';
import Navbar2 from '../components/Navbar/Navbar2';

const Shop = () => {
    const {product} =useContext(Data);
    const navigate=useNavigate()
  return (
    <div>
        <Navbar2/>
        <hr/>
        <h3 style={{color:'deeppink',textAlign:'center',fontWeight:'1000px'}}>Baby Shop</h3>
         <div className='container'>
           <Row className='m-4'>
                {product.map((item)=>(
                    <CardGroup className='col-6 col-md-3' key={item.Id}>
                        <Card className='m-2  p-4' style={{ border:'solid black 2px'}}>
                            <Card.Img style={{maxHeight:'17rem'}} src={item.Image}/>
                            <Card.Body>
                                <Card.Text>{item.ProductName}</Card.Text>
                                <Card.Text> Rs{item.Price}</Card.Text>
                                <Button variant='warning' style={{margin:'2px ',marginBottom:'20px'}} onClick={()=>navigate(`/Viewproduct/${item.Id}`)}>View Product</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                ))}
            </Row>
    

         </div>
   </div>
  )
}

export default Shop