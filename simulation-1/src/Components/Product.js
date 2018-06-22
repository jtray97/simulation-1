import React from 'react';
export default function Product (props){
        return(
            <div className="ProductDiv">
                <div className="productImgDiv">
                    <img src={props.img} alt="Product Img"/>
                </div>
                <div className="productTextDiv">
                    <h3>
                        {props.name}
                        {props.price}
                    </h3>
                </div>
                <div className="ProductButtonsDiv">
                
                </div>
            
            
            
            
            </div>

        )
    
}