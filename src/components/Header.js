import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';
import Carticon from './Carticon';
import '../MyStyle.scss';

const Header = () => {

    return (

        <div className="navbar">

            <div className="row">
                <div className="col-md-6" >
                    <span className="nav-link"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                </div>
                <div className="col-md-6">
                    <div className="CompJoin">
                        <p className="searchComp"><Search /></p>
                        <p className="searchIconComp"><Carticon /></p>

                    </div>
                </div>
            </div>

        </div>
    )

}


export default Header;