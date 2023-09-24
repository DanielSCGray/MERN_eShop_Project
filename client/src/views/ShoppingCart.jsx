import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

import SCartList from '../components/SCartList';

const ShoppingCart = () => {

    const {id} = useParams();
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/users/${id}`)
        .then(res => {
            console.log(res.data)
            setUser(res.data)
            console.log('done')
        })
        .catch(err => console.log(err))
    }, [])
    const checkout = ()=>{
        axios.patch(`http://localhost:8000/api/users/${id}`, {cart: []})
            .then(res => {
                console.log(res.data)
                navigate(`/home/${id}`)
            })
        .catch(err => console.log(err))
}
    


    if (user) {
        console.log(user.firstName)
        return (
            <div>
                <Link to={`/home/${user._id}`}>Home</Link>
                <h1>{user.firstName}'s shopping cart:</h1>
                <SCartList user={user} />
                <button className='btn btn-success btn-sm m-2' onClick={() => checkout()}>Check out </button>
            </div>
        )
    
}
}

export default ShoppingCart