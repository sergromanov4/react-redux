import React from 'react';
import FilmsPage from '../component/films-page.js'
import AsideBar from '../component/aside.js'


function MainBox(){
    return(
        <main>
            <FilmsPage />
            <AsideBar />
        </main>
    )
}

export default MainBox;