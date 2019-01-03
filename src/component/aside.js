import React  from 'react';
import {connect} from 'react-redux'


class AsideBar extends React.Component{

    genre(item){
        this.props.genreChange(item)
        this.props.searchClear()
        this.props.searchClearFlag()
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

  function mapDispatchToProps(dispatch){
    return{
       genreChange: (i) => {
           dispatch(
               {
               type:"GENRE_CHANGE",
               payload: i
               }
           );
       },
       searchClear:()=>{
           dispatch(
               {
                   type:"SEARCH",
                   payload: ""
                }
           )
       },
       searchClearFlag:()=>{
           dispatch(
               {
                   type:"SEARCHED",
                   payload: false
                }
           )
       },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AsideBar);
