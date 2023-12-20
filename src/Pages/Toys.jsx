import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Data } from '../components/MainRouter';
import { Card,Button,Row,Col } from 'react-bootstrap';

const Toys = () => {
    const navigate = useNavigate()
    const { product } =useContext(Data)
    const Toy = product.filter((item)=> item.Category === 'Toy')
  return ( 
    <Row className='m-4'>
            {Toy.map((item)=>(
                <Col key={item.Id}  xs={12} sm={6} md={4} lg={3} xl={3} className='d-flex flex-wrap mb-4'>
                <Card className='m-2 p-5' style={{border:'solid black 2px'}}>
                    <Card.Img style={{width:'12rem',height:'10rem'}} variant='top' src={item.Image}/>
                    <Card.Body>
                        <Card.Title className='m-2'>{item.ProductName}</Card.Title>
                        <Card.Text><h2>Rs{item.Price}</h2></Card.Text>
                        <Button onClick={()=>navigate(`/viewproduct/${item.Id}`)} variant="primary" >View Product</Button>
                    </Card.Body>
                </Card>
                </Col>
            ))}
        
    </Row>
  )
}

export default Toys