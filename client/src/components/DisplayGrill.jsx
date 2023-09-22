import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const DisplayGrill = (props) => {

    const [grill, setGrill] = useState({});
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const {uId, gId} = useParams();

    let thisUser = props.user
    setUser(thisUser);

    useEffect( () => { axios.get(`http://localhost:8000/api/grills/${gId}`)
    .then(res => setGrill(res.data))
    .catch(err => console.log(err))
}, []);

    const addToCart = (targetID) => {
    axios.patch(`http://localhost:8000/api/users/${user._id}`, {cart: cart.push(targetID)})
            .then(res => navigate(`/shoppingcart/${user._id}`))
        .catch(err => console.log(err))
}
    if (grill && grill.inStock) {
        
        return (
            <div>
                <div>
                    {grill.image}
                </div>
                <div>
                    <p>{grill.itemName}</p>
                    <p>{grill.brand}</p>
                    <p>Price : {grill.price}</p>
                    <p>Description : {grill.description}</p>
                    <button className='btn btn-success btn-sm m-2' onClick={ () => addToCart(grill._id)}>Add To Cart</button>
                </div>
            </div>
        )
    }
}

export default DisplayGrill