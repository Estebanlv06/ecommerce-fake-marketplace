import React, { useState, useEffect } from 'react'
import './Home.css'
import Logo from '../../Components/Nav/Logo'
import CardProduct from '../../Components/Products/CardProduct';
import FeaturedCard from '../../Components/Products/FeaturedCard'
import axios from 'axios';


function Home() {
    const [products, setproducts] = useState(null);
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                const result = response.data;
                setproducts(result);
            } catch (error) {
                console.error(error);
            }
        };
        
        fetchData();
    }, []);

    useEffect(() => {
        if (products !== null) {
            const filteredProducts = products.filter(product => product.rating.rate >= 4);
            setFeaturedProducts(filteredProducts);
        }
    }, [products]);
    return (
        <main className='container'>
            <nav className='nav'>
                <a href="#footer"><Logo /></a>
                
                <div className='links'>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#footer">Contact</a>
                </div>

                <div className='button-auth'>
                    <div className='button-cart'>
                        <i className='pi pi-shopping-cart'></i>
                    </div>
                    <button>Login</button>
                    <button>Sign up</button>
                </div>
            </nav>
            <header className='header'>
                <section className='section-header'>
                    <div>
                        <h1>
                            Explore a World of Style, Sparkle, and Technology in Our Online Store!
                        </h1>

                        <p>Welcome to our online store, where fashion meets elegance, and technology brings convenience. Discover a curated collection of trendy clothing, exquisite jewelry, and cutting-edge electrical gadgets, all at your fingertips. Experience seamless shopping with secure transactions and doorstep delivery. Start your journey of style, luxury, and innovation today!</p>

                        {/* <button>Sign up</button> */}
                    </div>
                </section>
                <img src='../../public/images/img-header.png' alt='Imagen'/>
                
            </header>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px'}}>
                <h1 style={{ marginBottom: '20px' }}>Featured Products</h1>
                <div style={{ width: '30%', height: '2px', backgroundColor: 'red' }}></div>
            </div>
            <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'  }}>
            {featuredProducts.length > 0 ? (
            featuredProducts.map(product => (
                    <FeaturedCard key={product.id} product={product} />
                ))
                ) : (
                "Cargando..."
            )}
            </section>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px'}}>
                <h1 style={{ marginBottom: '20px' }}>Latest Products</h1>
                <div style={{ width: '30%', height: '2px', backgroundColor: 'red' }}></div>
            </div>
            <section style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'  }}>
                {products !== null ? (
                    products.map(product => (
                        <CardProduct key={product.id} product={product} />
                    ))
                    ) : (
                    "Cargando..."
                )}
            </section>

            <footer id='footer'>
                <div className="container__footer">
                    <div className="box__footer">
                        
                        <Logo/>
                        
                        <div className="terms">
                            <p>Discover style, luxury, and technology at our online store. Shop the best in fashion, jewelry, and electrical goods. Enjoy a seamless experience with swift delivery and exceptional support. Thank you for choosing us as your destination for online shopping!</p>
                        </div>
                    </div>
                    <div className="box__footer">
                        <h2>Solutions</h2>
                        <a href="https://www.google.com">App Development</a>
                        <a href="#">App Marketing</a>
                        <a href="#">IOS Development</a>
                        <a href="#">Android Development</a>
                    </div>

                    <div className="box__footer">
                        <h2>Company</h2>
                        <a href="#">About</a>
                        <a href="#">Jobs</a>
                        <a href="#">Processes</a>
                        <a href="#">Services</a>            
                    </div>

                    <div className="box__footer">
                        <h2>Social networks</h2>
                        <a href="#"> <i className="fab fa-facebook-square"></i> Facebook</a>
                        <a href="#"><i className="fab fa-twitter-square"></i> Twitter</a>
                        <a href="#"><i className="fab fa-linkedin"></i> Linkedin</a>
                        <a href="#"><i className="fab fa-instagram-square"></i> Instagram</a>
                    </div>

                </div>

                <div className="box__copyright">
                    <p>All rights reserved © 2023 <b>Estebanlv06</b></p>
                </div>
                </footer>
        </main>
    )
}

export default Home