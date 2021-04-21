import React from 'react'
import Typer from 'react-typed';

export const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Welcome to my Website</h1>
                <Typer className="typer-text" 
                strings={["Data Visualization", "Web Development", "Backend development"]} 
                typeSpeed={40} 
                backSpeed={60}
                loop>  
                </Typer>
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    )
}

export default Header;
