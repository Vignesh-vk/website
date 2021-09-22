import React from "react";
import { useCart } from "react-use-cart";
const Itemcard=(props)=>{
    const{ addItem }=useCart();
    return(
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
        <div className="card p-0 overflow-hidden h-100 shadow" alt="im">
            <img src={props.img} class="card-img-top img-fluid" alt={props.title}></img>
                <div className="card-body text-center">
                    <h5 className="card-title">{props.name}</h5>
                    <h5 className="card-title">Rs.{props.price}</h5>
                    <h5 className="card-title">{props.available}</h5>
                    <h5 className="card-title">{props.vendor}</h5>
                    <p className="card-text">{props.desc}</p>
                    <button className="btn btn-success" onClick={()=> addItem (props.item)}>Add to cart</button>
                </div>
        </div>
        </div>
    );
};
export default Itemcard;