import React from 'react'
import Logo from './Logo'
import './Nav.css'

function Nav() {
    return (
        <nav className='nav'>
            <a href="#footer"><Logo /></a>
            <div className='links'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#footer">Contact</a>
            </div>
            <div className='button-auth'>
                <button>Login</button>
                <button>Sign up</button>
            </div>
        </nav>
    )
}

export default Nav