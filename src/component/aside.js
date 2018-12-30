import React  from 'react';
import {connect} from 'react-redux'


class AsideBar extends React.Component{

    genre(item){
        this.props.dispatch({
            type:"GENRE_CHANGE",
            payload:item
        })
    }

    render(){
        const element =  this.props.genre.map((item,index)=>
             <button className="button" key={index} onClick={this.genre.bind(this, item)}>
                 {item}
             </button>)

        return(
            <div className="aside-bar"> 
                {element}
            </div>
            )
    }

}



function mapStateToProps(state){
    return state.filmsReducer
  }
export default connect(mapStateToProps)(AsideBar);
