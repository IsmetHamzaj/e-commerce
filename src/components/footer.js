import React from 'react'
import './../footer.css'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter, FaArrowRight } from 'react-icons/fa'
function Footer() {
    return (
        <div>
            <div className='footer-container'>
                <div className='footer'>
                    <div className='footer-heading footer-1'>
                        <div className='terms'>
                            <p>CONTACT</p>
                            <p>TERMS OF SERVICES</p>
                            <p>SHIPPING AND RETURNS</p>
                        </div>
                        <p>&copy; <b>2021 Shelly.</b> Terms use <b>and</b> privacy policy</p>
                    </div>
                    <div className='footer-heading footer-2'>
                        <div className='feedback'>
                            <input className='email' type="email" placeholder='Give an email, get the newsletter' />
                            <FaArrowRight className='arrow' />
                        </div>
                        <div className='icon'>
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