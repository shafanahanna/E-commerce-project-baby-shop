import React, { useContext, useEffect, useState } from 'react'
import { Data } from '../components/MainRouter'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit';

const Cart = () => {
    const {setcart,product,setvieworder,loginuser} = useContext(Data);
    const navigate=useNavigate();
    const [cartuser,setcartuser] =useState([])
    useEffect(()=>{
        setcartuser(loginuser.cart)
    },[loginuser.cart]);

    const removeTask=(x)=>{
        const newTask = cartuser.filter((item)=> item.Id !== x);
        setcartuser(newTask);
        loginuser.cart = newTask
        toast.console.error('Your product is removed');
    }

    const handleincre = (x) =>{
        const productprice = product.find((item)=>item.Id === x);
        const updatecart = cartuser.map((item)=>{
            if(item.Id === x){
                if(item.qty <= item.stock){
                    item.qty += 1;
                    item.Price= parseFloat(productprice.Price)* item.qty
                }
            }
            return item;
        });
        setcart(updatecart)
    };

    const handledecre = (x)=>{
        const productprice = product.find((item)=> item.Id === x);
        const updatecart  = cartuser.map((item)=>{
            if(item.Id === x){
                if(item.qty <= item.stock && item.qty > 1){
                    item.qty -= 1;
                    item.Price = parseFloat(productprice.Price)* item.qty
                }
            }
            return item;
        })
        setcart(updatecart)
    }

    const reducer = cartuser.reduce((total,item)=> total + parseFloat(item.Price),0);
    const clear = ()=>{
        loginuser.cart=[];
        setcartuser([]);
        toast.success("Your cart is Empty")
    };

    const order =()=>{
        navigate('/payment');
        setvieworder(cartuser)
    }
    
  return (
    <div>
     <section className='navu h-100' style={{backgroundColor:'#eee'}}>
        <MDBContainer className='py-5 h-100'>
            <MDBRow className='justify-content-center align-items-center h-100'>
                <MDBCol md='10'>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <MDBTypography tag='h3' className='fw-normal mb-0  text-black'>Shopping Cart</MDBTypography>
                        <div>
                            <p className='mb-0'>
                                <span className='text-warning'></span>
                                <a href='#!' className='text-danger'>{reducer}<i className='fas fa-angle-down mt-1'></i></a>
                            </p>
                        </div>
                    </div>

                    {cartuser.map((item)=>(
                        <MDBCardBody className='p-4'>
                            <MDBRow className='justify-content-between align-items-center'>
                                <MDBCol md='12' lg='6' xl='4'>
                                    <MDBCardImage className='rounded-3' fluid src={item.Image} alt='products' />
                                </MDBCol>
                                <MDBCol md='12' lg='6' xl='8'>
                                    <p className='lead fw-normal mb-2'>{item.ProductName}</p>
                                    <p>
                                        <span className='text-muted'>{item.Description}</span>
                                    </p>

                                </MDBCol>
                                <MDBCol md='12' lg='6' xl='4' className='d-flex align-items-center justify-content-around'>
                                    <button className=' border border-secondary p-2 m-1'
                                     varient='danger' 
                                     onClick={()=> handledecre(item.Id)}> - </button>
                                     <span className='border border-secondary p-3'>{item.qty}</span>
                                     <button className='border border-secondary p-2 m-1'
                                     varient='danger'
                                     onClick={()=> handleincre(item.Id)}> + </button>
                                </MDBCol>
                                <MDBCol md='12' lg='6' xl='4' className='text-end'>
                                    <a href='#!' className='text-danger'>
                                        <MDBIcon onClick={()=> removeTask(item.Id)} icon='trash text-danger' size='lg' />
                                    </a>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    ))}
                </MDBCol>
            </MDBRow>
        </MDBContainer>
     </section>
     <div>
        <h1>TOTAL {reducer}</h1>
        <button className='bg-warning m-2' onClick={(()=>clear())}>ClearCart</button>
        <button className='bg-success' onClick={order}>Buy All</button>
     </div>

    </div>
  )
}

export default Cart