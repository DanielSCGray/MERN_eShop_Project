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
        <Link to={'/account'}>My account</Link>
        <Link to={'/search'}>Shop</Link>
        <Link to={'/cart'}>Shopping Cart</Link>
            </div>
        

        </div>
    )
}
