import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <h3>Cart</h3>
            <Link to={`/`}>
                <p>Home</p>
            </Link>
            <Link to={`/cart`}>
                <p>Cart</p>
            </Link>
        </div>
    )
}

export default Navbar