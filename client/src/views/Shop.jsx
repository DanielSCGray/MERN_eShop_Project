import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DisplayGrill from '../components/DisplayGrill';

const Shop = () => {

    const {uId} = useParams();
    const [user, setUser] = useState();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/users/${uId}`)
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    })
    return (
        <div>
            <DisplayGrill user={user} />
        </div>
    )
}

export default Shop