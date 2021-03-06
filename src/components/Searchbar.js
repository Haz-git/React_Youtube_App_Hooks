import React, { useState } from 'react';

const Searchbar = ({ requestHandler }) => {
    const [ searchResults,setSearchResults ] = useState('');

    const handleOnChange = (e) => {
        e.preventDefault();
        setSearchResults(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        requestHandler(searchResults);
    }


    return (
        <div className="ui category search">
            <form onSubmit={handleSearch}>
                <div className="ui icon input">
                    <input onChange={handleOnChange} className="prompt" type="text" placeholder="Search Videos..."></input>
                    <i className="search icon"></i>
                </div>
                <div className="results"></div>
            </form>
        </div>
    )
}

export default Searchbar;