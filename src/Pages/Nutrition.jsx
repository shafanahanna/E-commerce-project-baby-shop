import React, { useContext } from 'react';
import { Data } from '../components/MainRouter';
import { useNavigate } from 'react-router-dom';
import { Card,Button,Row,Col} from 'react-bootstrap';
import Navbar2 from '../components/Navbar/Navbar2';

const Nutrition = () => {
    const navigate= useNavigate()
    const { product } = useContext(Data)
    const Nutri = product.filter((item)=> item.Category === 'Nutrition')
  return (
    <>
    <Navbar2/>
    <hr/>
    <Row className='m-4'>
      <h1 style={{textAlign:'center',color:'rebeccapurple'}}>Nutrition</h1>
            {Nutri.map((item)=>(
                <Col key={item.Id} xs={12} sm={6} md={4} lg={3} xl={3}  className='d-flex flex-wrap m-4'>
                <Card className='m-4 p-5' style={{width:'17rem',border:'solid 2px black'}}>
                    <Card.Img style={{width:'10rem',height:'10rem'}} variant='top' src={item.Image}/>
                    <Card.Body>
                        <Card.Title className='m-2'>{item.ProductName}</Card.Title>
                        <Card.Text><h2>Rs{item.Price}</h2></Card.Text><br/>
                        <Button onClick={()=>navigate(`/viewproduct/${item.Id}`)} variant="primary" >View Product</Button>
                    </Card.Body>
                </Card>
                </Col>
            ))}
        
    </Row>
    </>
  )
}

export default Nutrition