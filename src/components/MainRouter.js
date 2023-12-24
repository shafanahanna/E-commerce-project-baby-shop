import React from 'react'
import { createContext, useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import Navbar2 from './Navbar/Navbar2';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Registration from '../Pages/Registration';
import { ToastContainer } from 'react-bootstrap';
import { Product } from './Product/Product';
import Search from '../Pages/Search';
import Clothes from '../Pages/Clothes';
import Boy from '../Pages/Boy';
import Girl from '../Pages/Girl'
import Toys from '../Pages/Toys';
import Nutrition from '../Pages/Nutrition';
import Viewproduct from '../Pages/Viewproduct';
import { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer/Footer';
import Shop from '../Pages/Shop';
import Cart from '../Pages/Cart';
import Payment from '../Pages/Payment';
import Testimonials from '../Pages/Testimonals';






export const Data=createContext();

const MainRouter = () => {

  const [userData, setUserData ]=useState([]);
  const [login, setLogin ]=useState(false);
  const [product,setProduct]=useState(Product)
  const [loginuser,setLoginUser]=useState(null);
  const [cart,setcart]  = useState([]);
  const [vieworder,setvieworder] =useState([]);
  const [search,setSearch] = useState("")



  return (
    <div>
      
         <Data.Provider value={{product,setProduct,userData, setUserData,login,setLogin,loginuser,setLoginUser,cart,setcart,vieworder,setvieworder,search,setSearch}}> 

         <Toaster position='top-center'/> 
         <Navbar2/>
       <Routes>
        
        <Route path='/'  element= {<Home />} /> 
        <Route path='/testimonals' element={<Testimonials />} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/login'  element= {<Login/>} />
        <Route path='/register'  element= { <Registration />} />
        <Route path='/search' element={<Search/>} />
        <Route path='/clothes' element={<Clothes/>}/>
        <Route path='/boy' element={<Boy/>} />
        <Route path='/girl' element={<Girl />} />
        <Route path='toys' element={<Toys />} />
        <Route path='/nutrition' element={<Nutrition/>} />
        <Route path='/viewproduct/:Id' element={<Viewproduct/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/payment' element={<Payment/>} />
        </Routes>
  
         </Data.Provider> 

       <Footer />
       <ToastContainer />
    </div>
  )
}

export default MainRouter