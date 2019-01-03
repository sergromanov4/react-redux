import React from 'react';
import {connect} from 'react-redux'


class SearchBar extends React.Component{
    edit(){
        this.props.seacrhValue(this.refs.scan.value)
        this.props.searchFlag()
        this.refs.scan.value="";
     }   
  
    render(){
        return(
            <div className="search">
                <input type="text" ref="scan" placeholder="Поиск фильма" />
                <button onClick={this.edit.bind(this)}>Поиск</button>
         </div>
        )
    }
}



function mapStateToProps(state){
    return  state
}

function mapDispacthToProps(dispatch){
    return{
        seacrhValue: (ref) => {
            dispatch(
                {
                type:"SEARCH",
                payload: ref
                }
            );
        },
        searchFlag: () => {
            dispatch(
                {
                type:"SEARCHED",
                payload: true
                }
            );
        }
    }
}
 
  

export default connect(mapStateToProps,mapDispacthToProps)(SearchBar);

