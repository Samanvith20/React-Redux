import React, { useEffect } from 'react'
import {useDispatch, useSelector } from "react-redux"
import ProductComponent from './ProductComponent'
import axios from "axios"
import {  setproducts } from '../Redux/actions/ProductActions'

const ProductListing = () => {
   
   const products =useSelector ((state)=>state.allproducts.products)
    //use Selector used to access the State
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        const response = await axios
          .get("https://fakestoreapi.com/products")
          .catch((err) => {
            console.log("Err: ", err);
          });
          dispatch(setproducts(response.data));
      };
    
      useEffect(() => {
        fetchProducts();
      }, []);
      console.log("Products :", products);
  return (
    <div className='ui grid container'>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing
