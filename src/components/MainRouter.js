import React from 'react'
import { createContext, useState } from 'react';
import {Route,Routes} from 'react-router-dom';
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
import AdminLogin from './AdminLogin';
import AdminHome from './AdminHome';
import Users from '../Admin/Users';
import AdminProduct from '../Admin/AdminProduct';
import Vieworder from '../Admin/ViewOrder';
import SideBar from './Sidebar';
import AddProdct from '../Admin/AddProdct';
import EditProdct from '../Admin/EditProdct';






export const Data=createContext();

// state declare in parent component
const MainRouter = () => {

  const [userData, setUserData ]=useState([]);
  const [login, setLogin ]=useState(false);
  const [product,setProduct]=useState(Product)
  const [loginuser,setLoginUser]=useState(null);
  const [cart,setcart]  = useState([]);
  const [vieworder,setvieworder] =useState([]);
  const [search,setSearch] = useState("")
  // const [isAdmin,setisAdmin]=useState(false)


  return (
    <div>
      {/* // context passing */}
         <Data.Provider value={{product,setProduct,userData, setUserData,login,setLogin,loginuser,setLoginUser,cart,setcart,vieworder,setvieworder,search,setSearch}}> 

         <Toaster position='top-center'/> 
        
         
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
        
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/adminhome' element={<AdminHome/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/adminproduct' element={<AdminProduct/>}/>
        <Route path='/vieworder' element={<Vieworder/>}/>
        <Route path='/sidebar' element={<SideBar/>}/>
        <Route path='/addproduct' element={<AddProdct/>}/>
        <Route path='/edit/:Id' element={<EditProdct/>}/>
        </Routes>
  
         </Data.Provider> 

       <Footer />
       <ToastContainer />
    </div>
  )
}

export default MainRouter