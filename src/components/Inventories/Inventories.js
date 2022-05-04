import React, { useEffect, useState } from 'react';
import Inventory from '../Home/Inventory/Inventory';

const Inventories = () => {
    const [inventories , setInventories] = useState([]);

    useEffect( ()=> {
        fetch('inventories.json')
        .then(res => res.json())
        .then(data=>setInventories(data));
    }, [])
    return (
        <div className="mt-5">
             
             {
                inventories.map(inventory => <Inventory
                key={inventory.id}
                inventory={inventory}>
                    
                </Inventory>)
             }
        </div>
    );
};

export default Inventories;