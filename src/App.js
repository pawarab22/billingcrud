import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {

  let [custom, setCustom] = useState({
    customername: "",
    itemname: "",
    quantity: "",
    price: "",
    subtotal: "",
    total: ""
  });

  const [customApiData, setCustomApiData] = useState([]);

  function handleChange(e) {
    e.preventDefault();
    setCustom({ ...custom, [e.target.id]: e.target.value });
  }

  function getdata() {
    axios.get('http://localhost:8081/customers/').then((response) => {

      setCustomApiData(response.data.data);

      console.log(response.data.data);

    });
  }

  function submit(e) {
    e.preventDefault();
    if (custom) {
      axios.post('http://localhost:8081/customers', {
        customername: custom.customername,
        itemname: custom.itemname,
        quantity: custom.quantity,
        price: custom.price,
        subtotal: custom.subtotal,
        total: custom.total

      }).then((response) => {
        console.log(response.data.data);
        window.location.reload(false);

      });
    }

  }
  useEffect(() => {
    document.title = 'Product';
    getdata();
  }, [])

  return (
    <div className="m-3">
      <h2 className='text-center'>Product</h2>
      <div>

        <h1 className='text-center'>Items Details Add</h1>

        <div className='container  mb-4'>
          <div className="row">
            <div className="col-lg-3"></div>
            <form className='col-lg-6 m-2 p-4 border'>
              <div className="form-group">
                <label >Customer Name</label>
                <input type="text" className="form-control" id="customername" value={custom.customername} name='customername' onChange={(e) => { handleChange(e) }} placeholder="Enter Customer Name" />
              </div>
              <br />
              <div className="form-group">
                <label>Item Name</label>
                <input type="text" className="form-control" id="itemname" value={custom.itemname} name='itemname' onChange={(e) => { handleChange(e) }} placeholder="Enter item name" />
              </div>
              <br />
              <div className="form-group">
                <label>Quantity</label>
                <input type="number" className="form-control" id="quantity" value={custom.quantity} name='quantity' onChange={(e) => { handleChange(e) }} placeholder="Enter quantity" />
              </div>
              <br />
              <div className="form-group">
                <label>Price</label>
                <input type="number" className="form-control" id="price" name='price' value={custom.price} onChange={(e) => { handleChange(e) }} placeholder="Enter price" />
              </div>
              <br />


              <button className="btn btn-primary" onClick={(e) => { submit(e) }}>Submit</button>
            </form>
            <div className="col-lg-3"></div>

          </div>
        </div>

        <div className="container ">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6 m-2">
              <table style={{ width: "100%" }} id="table"
                className="table table-hover text-center table-bordered">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Customer Name</th>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>SubTotal</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    customApiData.length && customApiData.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{item.customername}</td>
                          <td>{item.itemname}</td>
                          <td>{item.quantity}</td>
                          <td>{item.price}</td>
                          <td>{item.subtotal}</td>
                          <td>{item.total}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
            <div className="col-lg-3"></div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
