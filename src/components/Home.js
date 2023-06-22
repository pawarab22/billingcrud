import React, { useState } from 'react';

export default function Home() {
    let [custom, setCustom] = useState({
        name: "",
        itemname: "",
        quantity: "",
        price: "",
        subtotal: "",
        total: ""
    });

    function handleChange(e) {
        e.preventDefault();
        setCustom({ ...custom, [e.target.id]: e.target.value });
    }
    function submit(e) {
        e.preventDefault();

    }

    return (
        <div  >

            <h1>Product</h1>

            <div className='container border'>
                <div className="row">
                    <form className='col-lg-12'>
                        <div className="form-group">
                            <label >Customer Name</label>
                            <input type="text" className="form-control" id="customername" name='customername' onChange={(e) => { handleChange(e) }} placeholder="Enter Customer Name" />
                        </div>
                        <div className="form-group">
                            <label>Item Name</label>
                            <input type="text" className="form-control" id="itemname" name='itemname' onChange={(e) => { handleChange(e) }} placeholder="Enter item name" />
                        </div>
                        <div className="form-group">
                            <label>Quantity</label>
                            <input type="number" className="form-control" id="quantity" name='quantity' onChange={(e) => { handleChange(e) }} placeholder="Enter quantity" />
                        </div>

                        <div className="form-group">
                            <label>Price</label>
                            <input type="number" className="form-control" id="price" name='price' onChange={(e) => { handleChange(e) }} placeholder="Enter price" />
                        </div>

                        <div className="form-group">
                            <label>Total</label>
                            <input type="number" className="form-control" id="total" name='total' onChange={(e) => { handleChange(e) }} placeholder="total" />
                        </div>

                        <button className="btn btn-primary" onClick={(e) => { submit(e) }}>Submit</button>
                    </form>
                </div>
            </div>

           

        </div>
    )
}
