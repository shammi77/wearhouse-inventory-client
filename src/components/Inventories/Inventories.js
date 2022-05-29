import React, { useEffect, useState } from 'react';
import Inventory from '../Home/Inventory/Inventory';

const Inventories = () => {
    const [inventories , setInventories] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:5000/item')
        .then(res => res.json())
        .then(data=>setInventories(data));
    }, [])
    return (
        <div className="mt-5">
             
           <h1>Available Inventories</h1>
           <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                inventories.map(inventory => <Inventory
                key={inventory._id}
                inventory={inventory}>
                    
                </Inventory>)
             }
            </div>
        </div>
    );
};

export default Inventories;