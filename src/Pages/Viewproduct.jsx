import React, { useState } from 'react'
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { Data } from '../components/MainRouter';
import { toast } from 'react-hot-toast';
import { Card,Button } from 'react-bootstrap';

const Viewproduct = () => {
    const navigate=useNavigate();
    const { product,login,loginuser } = useContext(Data)
    const { Id } = useParams();
    const findviewproduct = product.filter((item)=> item.Id === parseInt(Id));
    const [btn,setbtn] = useState(true);

    const addCart=()=>{
        if(login){
            const [productget] = findviewproduct;

            const isProductInCart = loginuser.cart.some((item)=>item.Id === productget.Id);
            if(!isProductInCart){
                loginuser.cart.push({...productget,qty:1});
                console.log(loginuser,"viewprdct");
                toast.success("Your product is added to cart")
            }else{
                toast.error("This product is already in your cart");
                setbtn(false)
            }
        }else{
            navigate('/login');
            toast.error("Please login first")
        }
    };
   return (
    <div className='container mt-4 m-4 '>
      <div className='row justify-content-center align-items-center' >
        <div className='col-md-5'>
          {findviewproduct.map((item) => (
            <Card className='w-100' key={item.Id} style={{border:'2px solid black' , padding:'20px'}}>
              <Card.Img
                className='mx-auto' 
                style={{ width: "12rem", height: "10rem" }}
                variant='top'
                src={item.Image}
              />
              <Card.Body className='text-center'>
               
                <Card.Title>{item.ProductName}</Card.Title>
                <h3 className='text-warning'>Rs {item.Price}</h3>
                

                { btn ? (
                  <Button className='bg-success' variant='primary' onClick={addCart}>
                    Add to Cart
                  </Button>
                ) : (
                  <Button className='bg-danger' variant='primary' onClick={() => navigate("/cart")}>
                    Go To Cart
                  </Button>
                )}
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Viewproduct