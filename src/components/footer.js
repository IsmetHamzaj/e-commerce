import React from 'react'
import './../footer.css'
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
function Footer() {
    return (
        <div>
            <div className='footer'>
                <div>
                    <div className='terms'>
                        <p>CONTACT</p>
                        <p>TERMS OF SERVICES</p>
                        <p>SHIPPING AND RETURNS</p>
                    </div>
                    <div>
                        <p className='copyright'>&copy; <b>2021 Shelly</b>.Terms of use <b>and</b> privacy policy</p>
                    </div>
                </div>
                <div>
                    <div>
                        <input className='email' type="email" placeholder='Give an email, get the newsletter' />
                    </div>
                    <div>
                        <FaLinkedinIn />
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer