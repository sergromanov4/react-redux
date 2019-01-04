import React from 'react';
import MainContent from '../component/mainFilms.js'
import AsideBar from '../component/aside.js'


function MainBox(){
    return(
        <main>
            <MainContent />
            <AsideBar />
        </main>
    )
}

export default MainBox;