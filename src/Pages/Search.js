import React from 'react'
import { Button, Card, CardGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Search = ({searchresult}) => {
    const navigate=useNavigate()
  return (
    <div>
        <h3 style={{color:'silver'}}>Search</h3>
        <div className='container'>
            <div className='row'>
                {searchresult.map((item)=>(
                    <CardGroup className='col-6 col-md-3'>
                        <Card className='m-2 mt-4 md-3'>
                            <Card.Img style={{maxHeight:'12rem'}} src={item.Image} />
                            <Card.Text >{item.ProductName}</Card.Text>
                            <Card.Text>Price:{item.Price}Rs</Card.Text>
                            <Button variant='info' style={{margin:'2px' }} onClick={()=>navigate(`/Viewproduct/${item.Id}`)}>View Product</Button>
                        </Card>
                    </CardGroup>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Search