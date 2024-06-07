import React from 'react'
import './NavBar.css'

function NavBar(){
    return (
    <div className='navbar'>
        <button onClick={() => window.location.href='https://wiedenterprise.com'}>Home</button>
        <button onClick={() => window.location.href='https://wiedenterprise.com/about'}>About</button>
        <button onClick={() => window.location.href='https://wiedenterprise.com/contact'}>Contact</button>
        <button onClick={() => window.location.href='https://wiedenterprise.com/services'}>Services</button>
        <button onClick={() => window.location.href='https://wiedenterprise.com/faq'}>FAQ</button>
    </div>
    );
 }

export default NavBar;