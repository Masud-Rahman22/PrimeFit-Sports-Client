import { FaEnvelope } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import './footer.css'
import { NavLink } from "react-router-dom";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='row'>
                <div className='col footer img'>
                   <img src="/src/assets/images/PRIME__2_-removebg-preview.png" alt="" />
                </div>
                <div className='col'>
                    <h3 className='text-lg'>Office</h3>
                    <p>Ali Ahmed Chunka Shorok</p>
                    <p>Dewbhog Panir Tanki</p>
                    <p>Narayanganj, Dhaka</p>
                    <p className='email-id'>PrimeFit2024@gmail.com</p>
                    <h4>+8801850556560</h4>
                </div>
                <div className='col'>
                    <h3 className='text-lg'>Links</h3>
                    <ul>
                        <NavLink to='/'><li>Home</li></NavLink>
                        <NavLink to='/all-products'><li>All Products</li></NavLink>
                        <NavLink to='/manage-products'><li>Manage Products</li></NavLink>
                        <NavLink to='/cart'><li>Cart</li></NavLink>
                        <NavLink to='/aboutUs'><li>About Us</li></NavLink>
                    </ul>
                </div>
                <div className='col'>
                    <h3 className='text-lg'>Newsletter</h3>
                    <form>
                        <FaEnvelope className='far' />
                        <input type="email" placeholder='Enter your email here' required />
                        <button type='submit'><FaArrowCircleRight className='fas' /></button>
                    </form>
                    <div className='social-icons flex '>
                        <FaFacebook className='fab'/>
                        <FaSquareXTwitter className='fab'/>
                        <FaInstagramSquare className='fab'/>
                        <FaPinterest className='fab'/>
                    </div>
                </div>
            </div>
            <hr />
            <p className='copyright'>Prime Fit © 2024 - All Rights Reserved</p>
        </div>
    );
};

export default Footer;