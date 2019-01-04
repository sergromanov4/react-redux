import React from 'react';
import {connect} from 'react-redux'
import FilmsPage from './films-page'
import EachFilm from './eachFilm'


class MainContent extends React.Component{
    render(){
        return(
            <React.Fragment>
                {this.props.eachShow? <EachFilm />:<FilmsPage />}
            </React.Fragment>
        )
    }
}

function mapStateToProps(state){
    return state.filmsReducer
 }

export default connect(mapStateToProps)(MainContent);