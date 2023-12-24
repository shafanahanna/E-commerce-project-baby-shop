import React, { useContext } from 'react'
import { Data } from '../components/MainRouter'
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

const Search = () => {
    const {product,search} = useContext(Data);
    const navigate= useNavigate()
    const Search = product.filter((item)=>{
        if(search === ""){
            return item;
        } else if(item.ProductName.toLowerCase().includes(search.toLowerCase())){
            return item;
        }else{
            return "";
        }
    });
  return (
    <div>
      <div>
        <hr />
        
        <div className='d-flex flex-wrap m-3 justify-content-center'>
            {Search.map((item)=>(
                <Card onClick={()=>{navigate(`/viewproduct/${item.Id}`)}} 
                key={item.Id}
                className='m-2'
                style={{width:'16rem',overflow:'hidden',borderRadius:'8px'}}>
                    <div style={{display:'flex',justifyContent:'center',width:'100%'}} >
                        <Card.Img className='img-fluid m-2'
                        variant='top'
                        src={item.Image}
                        alt={item.ProductName}
                        style={{height:'16rem',width:'12rem',objectFit:'cover'}} />
                    </div>
                    <Card.Body>
                        <h6 className='mt-1'>Rs {item.Price}</h6>
                        <Card.Title style={{fontSize:'1.2rem',fontWeight:'bold',marginTop:'0.5rem'}}>{item.ProductName}</Card.Title>
                        <Button variant='primary' style={{marginTop:'1rem'}}>View Details</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
      </div>

    </div>
  )
}

export default Search