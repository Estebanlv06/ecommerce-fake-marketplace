import React from 'react'
import Logo from './Logo'
import './Nav.css'

function Nav() {
    return (
        <nav className='nav'>
            <Logo />
            <div className='links'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
            <div className='button-cart'>
                <i className='pi pi-shopping-cart'></i>
            </div>
            <div className='button-auth'>
                <button>Login</button>
                <button>Sign up</button>
            </div>
        </nav>
    )
}

export default Nav