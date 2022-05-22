import React from "react";
import "../App.css";
import { useState} from "react";


import { db } from "../firebase-config";
import { addDoc, collection, } from "firebase/firestore"


export default function Admin() {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    const [img, setImg] = useState("");

    const onSubmit = async() => {
        if (!title || !price || !img) {
          alert("All inputs are required!");
          return;
        }
    
        let product = {

            title: title,
            price: price,
            img: img,
        };


        
            const docRef = await addDoc(collection(db,"products"),{
                product,

            });
    
        setTitle("");
        setPrice("");
        setImg("");
      };





  return (
    <div>
      {/* Button trigger modal */}
      <button
        type="button"
        className="btn btn-primary style m-5"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Add Product
      </button>
      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add Product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">

            <div className="mb-3">
                  <label className="mt-2">Title of Product</label>
                  <input
                    type="text"
                    className=" w-100 mt-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="mt-2">Price</label>
                  <input
                    type="text"
                    className=" w-100 mt-2"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label className="mt-2">Image Url</label>
                  <input
                    type="text"
                    className=" w-100 mt-2"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                  />
                </div>
            
            
            
            
            
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={onSubmit}
              >
                Submit
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
