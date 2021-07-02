import "./Navbar.css";
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCogs } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav>
            <div className="navContainer left">
                <div className="navElement bold">App</div>
            </div>
            <div className="navContainer right">
                <div className="navElement">
                    <img className="pfp" src="https://i.redd.it/v0caqchbtn741.jpg"></img>
                </div>
                <div className="navElement">
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className="navElement">
                    <FontAwesomeIcon icon={faCogs} />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;