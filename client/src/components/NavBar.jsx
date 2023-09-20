import React from 'react';
import Link from 'react-router-dom';


export const NavBar = () => {
    
    
    
    return (
        <div>
            <div>
                <h3>Title/StoreName</h3>
            </div>
            <div>
        <Link to={'/home'}>Home</Link>
        <Link to={'/'}>My account</Link>
        <Link to={'/'}>Shop</Link>
        <Link to={'/'}>Shopping Cart</Link>
            </div>
        

        </div>
    )
}
