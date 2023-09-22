import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const UserInfoForm = (props) => {

    //STRUCTURE: each form data point gets a state, a prop to set it to, and gets called by props.action
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



    const [name, setName] = useState('');
    const navigate = useNavigate();
    //a __Name prop can be entered through the views page using the form
    let thisUser = props.User;
    //this conditional allows us to populate fields when editing + ignore when creating
    if (!firstName && thisUser) {
        setCurrentUser(thisUser)
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)
        //the action function is specified on views page (likely a create or edit)
        //add each form field after name as needed
        props.action(firstName, lastName, email, password, street, city, state, zipcode)
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
export default UserInfoForm;