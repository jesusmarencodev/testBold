import React from 'react'

const Header = () => {
    return (
        <div className="Header dc_flex_row dc_flex-center">
            <div className="Header__logo ml-5">
                <img  src="./images/boldLogo.svg" alt="bold" />
            </div>
            <nav className="Header__nav">
                <a  href="#!">Mi negocio</a>
                <a  href="#!">Ayuda</a>
            </nav>
        </div>
    )
}

export default Header
