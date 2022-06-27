import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const ApiCall = () => {
  const [apiData, setApiData] = useState([]);
//   console.log("api data heheheeh",apiData[0].category);
  const fetchData = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    // console.log(response);
    setApiData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {apiData.map((data) => (
        <div key={data.id}>
          <h1 style={{color : "black"}}>{data.category}</h1>
          <h2> $ {data.price}</h2>
        </div>
      ))}
    </>
  );
};

export default ApiCall;


