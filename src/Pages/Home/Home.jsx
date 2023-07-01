import React, { useState, useEffect } from 'react'
import './Home.css'
import CardProduct from '../../Components/Products/CardProduct'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Separator from '../../Components/Separator'
import Featured from '../../Components/Products/Featured'
import axios from 'axios';


function Home() {
    const [products, setproducts] = useState(null);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [showCartButton, setShowCartButton] = useState(false);


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

    useEffect(() => {
        const handleScroll = () => {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setShowCartButton(scrollTop > headerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const addToCart = (product) => {
        product.quantity = 1;
        setCartItems([...cartItems, product]);
    };

    const deleteCart = (id) => {
        const newItems = cartItems.filter((cartItem) => cartItem.id !== id);
        setCartItems(newItems);
    }

    const openSidebar = () => {
        setSidebarOpen(true);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <main className='container'>
            
            <header className='header'>
                <Header />
            </header>

            {showCartButton && (
                <div>
                    <div className='button-cart' style={{ position: 'fixed', bottom: '20px', right: '20px' }} onClick={openSidebar}>
                        <i className='pi pi-shopping-cart'></i>
                        <span className="badge">{cartItems.length}</span>
                    </div>
                    {sidebarOpen && <Sidebar
                                        closeSidebar={closeSidebar}
                                        deleteCart={deleteCart}
                                        cartItems={cartItems}
                                        setCartItems={setCartItems}
                                    />}
                </div>
            )}

            <Separator>Featured Products</Separator>

            <section className='section-products'>
                <Featured 
                    featuredProducts={featuredProducts}
                />
            </section>
            
            <Separator>Latest Products</Separator>

            <section className='section-products'>
                <CardProduct 
                    products={products} 
                    addToCart={addToCart}
                    deleteCart={deleteCart}
                    cartItems={cartItems}
                />
            </section>

            <footer id='footer'>
                <Footer />
            </footer>
        </main>
    )
}

export default Home