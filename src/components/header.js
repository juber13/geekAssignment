import React from 'react'
// import BsCart3 from 'react-icons/bs';
import { BsCart3 } from 'react-icons/bs';
import './header.css'
import { Link } from 'react-router-dom';
import { CartState } from '../Context';
const header = () => {
  const {cart} = CartState();
  return (
    <div className='header'>
        <div className='logo'>
            <Link to="/"><h4>TeeRex Store</h4></Link>
        </div>
        <div className='links'>
            <ul>
                <li>Products</li>
                <Link to="/cart"><li><BsCart3  className='cart-icon'/><small className='counter'>{cart.length > 0 ? cart.length : 0}</small></li></Link>
            </ul>
        </div>
    </div>
  )
}

export default header