import React from "react";
import Card from "../components/card/Card";
import Img from "../assests/MenShirt.jpg"
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore"

export default function MenCloth() {

    const [products, setProducts] = useState([]);
    const productscollectionRef = collection(db, "products")


   useEffect(() => {

    const getProducts = async ()=>{
        const data = await getDocs(productscollectionRef);
        setProducts(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
        


    }

    getProducts()
     
   
    
   }, [])
   

  return (
    <>
      {/* <h1 className="text-center mt-5">Men's Cloth</h1> */}

      <div className="container-fluid d-flex justify-content-between slide ">
          {products.map((product)=>{
              return <Card img={product.product.img} title={product.product.title} price={product.product.price}></Card>
          })}
      
      {/* <Card img={Img} title="Grey Men's Shirt" price="$70.00"></Card>
      <Card img={Img} title="Grey Men's Shirt" price="$70.00"></Card>
      <Card img={Img} title="Grey Men's Shirt" price="$70.00"></Card>
      <Card img={Img} title="Grey Men's Shirt" price="$70.00"></Card> */}
        
        
      </div>
    </>
  );
}
