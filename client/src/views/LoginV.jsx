import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';

const LoginV = () => {

    const navigate = useNavigate();

    // const[user, setUser] = useState();
    const userLogin = email1 => {
        axios.get(`http://localhost:8000/api/users/email/${email1}`)
        .then(res => navigate(`/home/${res.data._id}`))
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <h1>Login</h1>
        <Login action={userLogin} />

    </div>
  )
}

export default LoginV