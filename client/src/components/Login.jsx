import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {

    //STRUCTURE: each form data point gets a state, a prop to set it to, and gets called by props.action

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userObj, setUserObj] = useState({});
    const navigate = useNavigate();
    
    
    


    const handleSubmit = (e) => {
        e.preventDefault();
        
        // get user by email - check that user.email == email state
        //check that user.password == input password
        //if yes lift state of this user to set current user on the top level
        //navigate to homepage
        //if no handle error messages 
        
        
    }


    return (
        <div className='m-3'>
            <form className="form-control" onSubmit={handleSubmit}>
                <label className="form-label">Email:</label>
                <input className="form-control" name='email' onChange={(e)=> {setEmail(e.target.value)}} />
                <label className="form-label">Password:</label>
                <input className="form-control" name='password' type='password' onChange={(e)=> {setPassword(e.target.value)}} />
                <div>
                    
                    <input className="form-control bg-primary" type='submit' value='Submit' />
                </div>
            </form>
        </div>
    )
}
export default Login;