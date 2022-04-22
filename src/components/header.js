import React from 'react'
import { AiOutlineUser, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import "./../header.css"
const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <h1><span>S</span>HOPPE</h1>
            </div>
            <div className='links'>
                <div>
                    <ul>
                        <li>
                            <a href='#'>Shop</a>
                        </li>
                        <li>
                            <a href='#'>Blog</a>
                        </li>
                        <li>
                            <a href='#'>Our Story</a>
                        </li>
                    </ul>
                </div>
                <div className='icons'>
                    <AiOutlineSearch />
                    <AiOutlineShoppingCart />
                    <AiOutlineUser />
                </div>
            </div>
        </div>
    )
}

export default Header