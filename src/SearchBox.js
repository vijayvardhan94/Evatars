import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className = 'pa2'>
            <input 
            className='pa3 ba b--green bg-silver'
            type='search' 
            placeholder='search evatars'
            value={searchfield}
            onChange={searchChange}
            />
            
        </div>
    )
}

export default SearchBox;