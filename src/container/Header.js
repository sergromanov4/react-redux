import React from 'react';
import SearchBar from '../component/search-bar.js'

function Header(){
    return(
        <header className="App-header">
             <h1>
                 Новинки КИНО!
            </h1>

            <SearchBar />
            
    </header>
    )
}

export default Header