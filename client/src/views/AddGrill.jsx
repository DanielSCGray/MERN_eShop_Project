import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddGrill = () => {

    const [itemName, setItemName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [burners, setBurners] = useState('');
    const [stock, setStock] = useState('');
    const navigate= useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/grills', 
        {
            itemName,
            image,
            description,
            brand,
            price,
            burners,
            stock
            
        })
        .then(res=> {
            console.log(res.data);
            
        })
        .catch(err => console.log(err))
    }


    return (
        <div className='m-3'>
            <form className="form-control" onSubmit={handleSubmit}>
                <label className="form-label">ItemName:</label>
                <input className="form-control" value={itemName} onChange={(e) => { setItemName(e.target.value) }} />

                <label className="form-label">Image:</label>
                <input className="form-control" value={image} onChange={(e) => { setImage(e.target.value) }} />


                <label className="form-label">Description:</label>
                <input className="form-control" value={description} onChange={(e) => { setDescription(e.target.value) }} />


                <label className="form-label">Brand:</label>
                <input className="form-control" value={brand} onChange={(e) => { setBrand(e.target.value) }} />


                <label className="form-label">Price:</label>
                <input className="form-control" type='number' value={price} onChange={(e) => { setPrice(e.target.value) }} />


                <label className="form-label">Burners:</label>
                <input className="form-control" type='number' value={burners} onChange={(e) => { setBurners(e.target.value) }} />


                <label className="form-label">Stock:</label>
                <input className="form-control" type='number' value={stock} onChange={(e) => { setStock(e.target.value) }} />

                <div>
                    
                    <input className="form-control bg-primary" type='submit' value='Submit' />
                </div>
            </form>
        </div>
    )
}

export default AddGrill