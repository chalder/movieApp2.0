import React, { useState, useRef } from 'react';
import FontAwesome from 'react-fontawesome';

const SearchBar = () => {
    const { searchText, setSearchText } = useState('');
    const searchAction = (e) => console.log(e.target.value);
    return (
        <div className='search-bar'>
            <div className='search-bar-content'>
                <FontAwesome className="fa-search" name="search" size="2x" />
                <input type="search" placeholder="Search Movies" onChange={searchAction} value={searchText} />
            </div>

        </div>
    )
}

export default SearchBar;