import React from 'react'
import Nav from '../../Components/Nav/Nav'

function Header() {
    return (
        <>
            <nav className='nav'>
                <Nav/>
            </nav>
            <section className='section-header'>
                <div>
                    <h1>
                        Explore a World of Style, Sparkle, and Technology in Our Online Store!
                    </h1>

                    <p>Welcome to our online store, where fashion meets elegance, and technology brings convenience. Discover a curated collection of trendy clothing, exquisite jewelry, and cutting-edge electrical gadgets, all at your fingertips. Experience seamless shopping with secure transactions and doorstep delivery. Start your journey of style, luxury, and innovation today!</p>

                    {/* <button>Sign up</button> */}
                </div>
                <img src='../../public/images/img-header.png' alt='Imagen'/>
            </section>
        </>
    )
}

export default Header