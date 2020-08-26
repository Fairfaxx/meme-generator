import React from 'react';
import './Header.css'

const Header = (props) => {


    return (
        <div className="header">
            <img src={props.src} />
            <h1>Generate your own Meme!</h1>
        </div>
    )
}

export default Header;
