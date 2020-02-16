import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {

    return (

        <div>
            <span className="search-link"  ><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></span>
        </div>


    );


}

export default Search;