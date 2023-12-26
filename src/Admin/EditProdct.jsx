import React, { useContext, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast } from 'react-hot-toast';
import { Data } from '../components/MainRouter';

const EditProdct = () => {
  const { Id } = useParams();
  const ProductNameRef = useRef(null);
  const StockRef = useRef(null);
  const PriceRef = useRef(null);
  const CategoryRef = useRef(null)

  const { product, setProduct} = useContext(Data);
  const findval = product.find((item) => item.Id === parseInt(Id));

  const [formData, setFormData] = useState({
    ProductName: findval.ProductName,
    Stock: findval.Stock,
    Price: findval.Price,
    Category : findval.Category
  });

    // Retrieve updated values
  const handleSave = () => {
   
    const updatedProductName = ProductNameRef.current.value;
    const updatedStock = StockRef.current.value;
    const updatedPrice = PriceRef.current.value;
    const updatedCategory = CategoryRef.current.value;

   
    if (!updatedProductName.trim() || !updatedStock.trim() || !updatedPrice.trim() || updatedCategory.trim()) {
      
      toast.error("Please fill in all fields");
      return;
    }

    // Update form data state
    setFormData({
      ProductName: updatedProductName,
      Stock: updatedStock,
      Price: updatedPrice,
      Category:updatedCategory
    });

   
    const updatedProduct = product.map((item) =>
      item.Id === parseInt(Id)
        ? {
            ...item,
            ProductName: updatedProductName,
            Stock: updatedStock,
            Price: updatedPrice,
            Category:updatedCategory,
          }
        : item
    );

    setProduct(updatedProduct);
 
    toast.success("Product updated");
  };

  return (
    <div style={{ width: '100%', height: '40vh' }}>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">
              <b>Product Name</b>
            </th>
            <th scope="col">
              <b> Price</b>
            </th>
            <th scope="col">
              <b>Stock</b>
            </th>
            <th scope="col">
              <b>Category</b>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr key={findval.Id}>
            <td>
              {' '}
              <input
                type="text"
                ref={ProductNameRef}
                defaultValue={formData.ProductName}
              />{' '}
            </td>
            <td>
              <input
                type="number"
                ref={PriceRef}
                defaultValue={formData.Price}
              />
            </td>
            <td>
              <input
                type="number"
                ref={StockRef}
                defaultValue={formData.Stock}
              />
            </td>
            <td>
              <input
                type="text"
                ref={CategoryRef}
                defaultValue={formData.Category}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button
        type="button"
        className="btn btn-success m-2 mt-5"
        onClick={handleSave}
      >
        Save
      </button>
      <button type="button" className="btn btn-danger m-2 mt-5">
        Discard
      </button>
    </div>
  );
};

export default EditProdct;