import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Inventory = (inventory) => {
    const {name,img,description,price,supplier_name,quantity} = inventory;
    return (
        <div className='row'>
            <div className="g-4  col-lg-4 col-md-6 col-sm-12  ">  
        <div className="card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title> Name: {name}</Card.Title>
          <Card.Text>Price : {price}</Card.Text>
          <Card.Text> Description : {description}</Card.Text>
          <Card.Text> Quantity : {quantity}</Card.Text>
          <Card.Text> Supplier Name : {supplier_name}</Card.Text>
          <Button variant="primary"> Update</Button>
        </Card.Body>
        
        </div>
      </div>
        </div>
    );
};

export default Inventory;