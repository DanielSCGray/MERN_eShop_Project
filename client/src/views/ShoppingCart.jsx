import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import SCartList from '../components/SCartList';

const ShoppingCart = () => {

    const {id} = useParams();
    const [user, setUser] = useState();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/users/${id}`)
        .then(res => {
            console.log(res.data)
            setUser(res.data)
            console.log('done')
        })
        .catch(err => console.log(err))
    }, [])
    if (user) {
        console.log(user)
        return (
            <div>
                <SCartList user={user} />
            </div>
        )
    
}
}

export default ShoppingCart