import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { GrillList } from '../components/GrillList';

const Home = () => {

    const {id} = useParams();
    const [user, setUser] = useState();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/users/${id}`)
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    }, [])

    if (user) {
        
        return (
            <div>
                <h1>Welcome, {user.firstName}</h1>
                <Link to={`/shoppingcart/${user._id}`} >my cart</Link>
    
                <h3>Great grills to buy:</h3>
                <GrillList user={user} />
                
            
            </div>
        )
    }
}

export default Home