import React from 'react'
import './Footer.css'
import Logo from '../../Components/Nav/Logo'

function Footer() {
    return (
        <>
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
            
        </>
    )
}

export default Footer