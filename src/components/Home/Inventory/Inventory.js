import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({inventory}) => {
    const {_id,name,img,description,price,supplierName,quantity} = inventory;


    const navigate = useNavigate();

    const navigateToInventoryPage =id =>{
        navigate(`/inventory`)
    }
    return (

<div className="card lg:max-w-lg bg-base-400 shadow-xl flex">
<div className="card-body">
    <img className="" src={img} alt=''/>
  <h2 className=" text-2xl text-bold">Name: {name}</h2>
  <p> Description : {description}</p>
  <h4>Price: {price}</h4>
  <h4>Quantity : {quantity}</h4>
  <h4>Supplier Name : {supplierName}</h4>
  <div className="card-actions">
    <button  onClick={()=> navigateToInventoryPage(_id)} className="btn btn-primary">Update</button>
  </div>
</div>
</div>
);
};

export default Inventory;