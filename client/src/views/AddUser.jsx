
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';



const AddUser = () => {

    
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [currentUser, setCurrentUser] = useState();


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users', 
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            address: {
                street: street,
                city: city, 
                state: state,
                zipcode: zipcode
            }
        })
        .then(res=> {
            console.log(res.data);
            navigate(`/home/${res.data._id}`)
        })
        .catch(err => console.log(err))
        //the action function is specified on views page (likely a create or edit)
        //add each form field after name as needed
        
    }


    return (
        <div className='m-3'>
            <form className="form-control" onSubmit={handleSubmit}>
                <label className="form-label">First Name:</label>
                <input className="form-control" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />

                <label className="form-label">Last Name:</label>
                <input className="form-control" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />

                <label className="form-label">Email:</label>
                <input className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />

                <label className="form-label">Password:</label>
                <input className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />

                <label className="form-label">Confirm Password:</label>
                <input className="form-control" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />

                <h3>Address: </h3>
                <label className="form-label">Street:</label>
                <input className="form-control" value={street} onChange={(e) => { setStreet(e.target.value) }} />

                <label className="form-label">City:</label>
                <input className="form-control" value={city} onChange={(e) => { setCity(e.target.value) }} />

                <label className="form-label">State:</label>
                <input className="form-control" value={state} onChange={(e) => { setState(e.target.value) }} />

                <label className="form-label">Zipcode:</label>
                <input className="form-control" value={zipcode} onChange={(e) => { setZipcode(e.target.value) }} />

                <div>
                    <button className='btn btn-warning btn-sm m-2' onClick={() => navigate('/home')}>Cancel</button>
                    <input className="form-control bg-primary" type='submit' value='Submit' />
                </div>
            </form>
        </div>
    )
}

export default AddUser