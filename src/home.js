import React from "react";
import Itemcard from "./itemcard";
import Data from "./data";

const Home=()=>{
    console.warn(Data.productData)
    return(
        <div>
            <h1 className="text-center mt-3">All Items</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {Data.productData.map((item,index)=>{
                        return(
                            <Itemcard 
                                img={item.img} 
                                name={item.name} 
                                desc={item.desc}
                                price={item.price}
                                available={item.available}
                                vendor={item.vendor}
                                item={item}  
                                key={index}/>
                        )
                    })}

                </div>
            </section>
        </div>
    );
};
export default Home;