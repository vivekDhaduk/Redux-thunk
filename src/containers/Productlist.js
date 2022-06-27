import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Productcomponent from "./Productcomponent";
import { fetchProducts } from "../redux/actions/ProductAction";
// import axios from "axios";
// import { setProducts } from "../redux/actions/ProductAction";
// import "../App.css"

const Productlist = () => {
  const products = useSelector((state) => state);
  const dispetch = useDispatch();
//   const fetchProducts = async () => {
//       const response = await axios
//       .get("https://fakestoreapi.com/products")
//       .catch((err) => {
//           console.log("err", err);
//         });
//         //   console.log(response.data)
//         dispetch(setProducts(response.data))
        
//     };
    
    useEffect(() => {
        dispetch(fetchProducts());
    })
    console.log(products);
    return (
        <div className="ui grid container">
      <Productcomponent />
    </div>
  );
};

export default Productlist;
