import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DisplayGrill from '../components/DisplayGrill';

const Shop = () => {

    const {uId} = useParams();
    const [user, setUser] = useState();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/users/${uId}`)
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
                <DisplayGrill user={user} />
            </div>
        )
    
}
}
export default Shop