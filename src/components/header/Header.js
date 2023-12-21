import React from 'react'
import './header.css'
import CTA from './CTA'
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <p>Contact sales team for a commercial promote</p>
                <CTA />
                <a href="contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header