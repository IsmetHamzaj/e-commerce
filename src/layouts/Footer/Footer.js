import React from 'react'
import styles from './Footer.module.scss'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter, FaArrowRight } from 'react-icons/fa'
function Footer() {
    return (
        <div>
            <div className={styles.footer_container}>
                <div className={styles.footer}>
                    <div className={styles.footer_heading}>
                        <div className={styles.terms}>
                            <p>CONTACT</p>
                            <p>TERMS OF SERVICES</p>
                            <p>SHIPPING AND RETURNS</p>
                        </div>
                        <p>&copy; <b>2021 Shelly.</b> Terms use <b>and</b> privacy policy</p>
                    </div>
                    <div className={styles.footer_heading}>
                        <div className={styles.feedback}>
                            <input className={styles.email} type="email" placeholder='Give an email, get the newsletter' />
                            <FaArrowRight className={styles.arrow} />
                        </div>
                        <div className={styles.icon}>
                            <div>
                                <FaLinkedinIn />
                            </div>
                            <div>
                                <FaFacebookF />
                            </div>
                            <div>
                                <FaInstagram />
                            </div>
                            <div>
                                <FaTwitter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer