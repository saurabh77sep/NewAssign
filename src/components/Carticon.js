import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import '../MyStyle.scss'; 

const Carticon = () => {

    return (
            <div>
            <span className="cart-link" to="#"><FontAwesomeIcon icon={faCartPlus} ></FontAwesomeIcon></span>
            </div>

    );


}

export default Carticon;