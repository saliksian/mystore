import React, { Profiler } from "react";
import Card from "../components/card/Card";
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import ProductInfo from "../pages/ProductInfo";


export default function MenCloth() {

    const [products, setProducts] = useState([]);
    const productscollectionRef = collection(db, "products")


    const onClickHandler = (item)=>{
      console.log(item.id);
      <ProductInfo></ProductInfo>
    }







   useEffect(() => {

    const getProducts = async ()=>{
        const data = await getDocs(productscollectionRef);
        setProducts(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
        


    }

    getProducts()
     
   
    
   }, [])
   

  return (
    <>

      <div className="container-fluid d-flex justify-content-between slide ">
          {products.map((product)=>{
              return <Card img={product.product.img} title={product.product.title} price={product.product.price} onClick={() =>onClickHandler(product)}></Card>
          })}
        
        
      </div>
    </>
  );
}
