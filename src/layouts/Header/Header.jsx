import React from 'react'
import { AiOutlineUser, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import styles from './Header.module.scss'

const Header = () => {
    // const auth = useAuth()
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <h1><span>S</span>HOPPE</h1>
            </div>
            <div className={styles.links}>
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
                <div className={styles.icons}>
                    <AiOutlineSearch />
                    <AiOutlineShoppingCart />
                    <AiOutlineUser />
                </div>
            </div>
        </div>
    )
}

export default Header