import React from 'react';
import { Link } from 'react-router-dom'
import '../css/Home/Header.css';

export default function Header(props) {

    const { headerContent, currentPage, scrollToContact, isWindowLarge } = props

    console.log(currentPage === 1)
    console.log(isWindowLarge)

    let backgroundImage = currentPage === 1 ? "url('https://images.unsplash.com/photo-1528834342297-fdefb9a5a92b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')" 
                        : currentPage === 2 ? "url('https://images.unsplash.com/photo-1464851434182-31f99b2df57e?ixlib=rb-1.2.1&auto=format&fit=crop&w=964&q=80')" 
                        : isWindowLarge ? "url('https://images.unsplash.com/photo-1486102515046-44130769cb25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80')" 
                        : ''
    console.log(backgroundImage)
    
    return (
    <header className="homeHeader">
        <div className="homeHeaderContent" style={{backgroundImage}}>
            <nav>
                <div className="navOptions">
                    <Link to='/' className={ currentPage === 0 ? "activeNav" : ''}>Home</Link>
                    <Link to='/work' className={ currentPage === 1 ? "activeNav" : ''}>Design</Link>
                    <Link to='/developmentWork' className={ currentPage === 2 ? "activeNav" : ''}>Development</Link>
                    <Link to='/#contactMe' onClick={scrollToContact} href="#contactMe">Contact Me</Link>
                </div>
                {/* <div className="socailMedia">
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-github"></i>
                </div> */}
            </nav>
            <div className="homeHeaderInfo">
                <p className="homeHeaderContentSelf"><span className="homeHeaderHello">{headerContent.line1}</span>{headerContent.line2}</p>
                <p className="homeHeaderContentDes">{headerContent.line3}</p>  
               
            </div>
            <div className="homeHeaderContentBack"></div>
        </div>
    </header>
    );
}