import React, { Component } from 'react'

export default class Adding extends Component {
    constructor() {
        super()
        this.state = {
            imgURL: 'http://via.placeholder.com/350x150',
            productName: '',
            productPrice: '',

        }
    }
    handleURLchange = (val) =>{
        this.setState({
            imgURL:val
        })
    }
    handleNameChange = (val) =>{
        this.setState({
            productName:val
        })
    }
    handlePriceChange = (val) =>{
        this.setState({
            productPrice:val
        })
    }

    // this.handleURLchange((e)=>{return e.target.value})

    render() {
        return (
            <div className="addingDiv">
                <img className="addingImg" src={this.state.imgURL} alt="temp" />
                <div className="inputDivs">
                    <div className="productImgDiv">
                        <h3>Image URL</h3>
                        <input placeholder="Image URL goes Here" onChange ={()=>{this.handleURLchange((e)=>{e.target.value})}} />
                    </div>
                    <div className="productNamediv">
                        <h3>Product Name</h3>
                        <input placeholder="Product Name Goes Here" value = {this.state.productName} onChange ={()=>{this.handleNameChange((e)=>{e.target.value})}}/>
                    </div>
                    <div className="productPriceDiv">
                        <h3>Price:</h3>
                        <input  placeholder="Product Price Here" value = {this.state.productPrice} onChange ={()=>{this.handlePriceChange((e)=>{e.target.value})}}/>
                    </div>
                </div>
                <div className="buttonsDiv">
                    <button className="cancelButton">Cancel</button>
                    <button className="addButton">Add to Invintory</button>
                </div>
            </div>
        )
    }
}