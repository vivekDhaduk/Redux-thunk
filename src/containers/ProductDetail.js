import React, {useEffect} from 'react'
// import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
// import { selectedProduct } from '../redux/actions/ProductAction';
import "../App.css"
import { fetchProduct } from '../redux/actions/ProductAction';

const ProductDetail = () => {
    const product = useSelector((state) => state.product) 
    const {productId} = useParams();
    // console.log(product)
    const dispatch = useDispatch()
   
    useEffect(() => {
        if(productId && productId !== "") dispatch(fetchProduct(productId))
    },[productId, dispatch])
  return (
    <div className=''>
        <h1>ProductDetail</h1>

        <h1>category : {product.category}</h1>
        <h2>title : {product.title}</h2>
        <h3>description : {product.description}</h3>
        <img className='productimg' src={product.image} alt="productdetail" />
        <h2>price : {product.price} $</h2>
       
    </div>
  )
}

export default ProductDetail


