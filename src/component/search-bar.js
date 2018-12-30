import React from 'react';
import {connect} from 'react-redux'


class SearchBar extends React.Component{

    edit(){
        this.props.dispatch({
            type:"SEARCH",
            payload: this.refs.scan.value
        })
            
     }   
  
    render(){
     
        return(
            <div className="search">
                <input type="text" ref="scan" />
                <button onClick={this.edit.bind(this)}>Поиск</button>
         </div>
        )
    }
}



function mapStateToProps(state){
    return  state
}
        
  

export default connect(mapStateToProps)(SearchBar);

