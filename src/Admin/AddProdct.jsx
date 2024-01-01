import React ,{useContext,useRef}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Data } from '../components/MainRouter'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'
import SideBar from '../components/Sidebar'


const AddProdct = () => {
  let Id= 40;
  const navigate=useNavigate();
  const {product,setProduct} =useContext(Data)
  
  const qtyRef =useRef(null)
  const ProductNameRef = useRef(null)
  const PriceRef =useRef(null)
  const ImageRef = useRef(null)
  const CategoryRef = useRef(null)

  // form submitt
  const handleSubmit = () =>{
    const Price = parseInt(PriceRef.current.value);
    const qty = parseInt(qtyRef.current.value);
    
    if(isNaN(Price) || isNaN(qty)){
      toast.error('Invalid price or quantity')
      return;
    }
    const newProduct = {
      Id :Id + 1,
      ProductName: ProductNameRef.current.value,
      Price:PriceRef.current.value,
      Image:ImageRef.current.value,
      Category:CategoryRef.current.value
    };

    const newTask = [...product, newProduct];
    setProduct(newTask);
    navigate('/shop');
    toast.success('Product Added Successfully');
  }
  return (
    
       <div className='d-flex'>

<div>
  <SideBar/>
</div>


<div className="container mt-5">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2 className="mb-0">Add a Product</h2>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="Productname" className="form-label">
                Product Name
              </label>
              <input type="text" id="ProductName" ref={ProductNameRef} className="form-control" required />
            </div>

            <div className="mb-3">
              <label htmlFor="Price" className="form-label">
                Price:
              </label>
              <input type="number" id="price" ref={PriceRef} className="form-control" required />
            </div>

            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image :
              </label>
              <input type="text" id="imageUrl" ref={ImageRef} className="form-control" required />
            </div>

            <div className="mb-3">
              
              <label htmlFor="category" className="form-label">
                Category:
              </label>
              <input type="text" id="category" ref={CategoryRef} className="form-control" required />
            </div>

            

            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                qty:
              </label>
              <input type="number" id="quantity" ref={qtyRef} className="form-control" required />
            </div>

            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>




</div>






    
  )
}

export default AddProdct