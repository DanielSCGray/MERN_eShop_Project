import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const DisplayGrill = (props) => {

    const [grill, setGrill] = useState({});
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const {uId, gId} = useParams();

    let thisUser = props.user
    console.log(thisUser)
    // setUser(thisUser);

    useEffect( () => { axios.get(`http://localhost:8000/api/grills/${gId}`)
    .then(res => {
        
        console.log(res.data)
        setGrill(res.data)
        console.log('grill get done')
    })
    .catch(err => console.log(err))
    }, []);

    const addToCart = (targetID) => {
    axios.patch(`http://localhost:8000/api/users/${uId}`, {cart: [...thisUser.cart, targetID]})
            .then(res => {
                console.log(res.data)
                navigate(`/shoppingcart/${uId}`)
            })
        .catch(err => console.log(err))
}
    if (grill) {
        console.log(grill)
        console.log('2')
        console.log(grill._id)
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