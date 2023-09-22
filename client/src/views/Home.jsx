import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GrillList } from '../components/GrillList';

const Home = () => {

    const {id} = useParams();
    const [user, setUser] = useState();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/users/${id}`)
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    })


    return (
        <div>
            <h1>Welcome, {user.firstName}</h1>

            <h3>Consume!</h3>
            <GrillList user={user} />
            
        
        </div>
    )
}

export default Home