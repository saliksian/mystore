import React from "react";
// import MenShirt from "../../assests/MenShirt.jpg"
import "../../App.css"
export default function Card(props) {
  return (
    <div className="m-4">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={props.img} alt="Card image cap" width={100} height={250}/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            $ {props.price}
          </p>
          <a href="#" className="btn btn-success style w-100">
            Buy
          </a>
        </div>
      </div>
    </div>
  );
}
