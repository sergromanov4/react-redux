import React from 'react';
import {connect} from 'react-redux'


class FilmsPage extends React.Component{
    genre(i){
        this.props.dispatch({
            type:"GENRE_CHANGE",
            payload:i
        })
        this.props.dispatch({
            type:"SEARCH",
            payload:''
        })
        this.props.dispatch({
            type:"SEARCHED",
            payload:false
        })
    }
    render(){    
    
        const element =  this.props.films.map((item)=>
                (item.genre.join().indexOf(this.props.genreNow)>-1)?
                <div className="film" key={item.id}>
                   
                    <img src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                    <ul>
                        {item.genre.map((i,z)=>
                            <li key={z} onClick={this.genre.bind(this, i)}>
                               {i}
                            </li>)}
                    </ul>
                </div>
                     :""
        );

        const searchElement = this.props.films.map((item)=>
        (item.title.toUpperCase().indexOf(this.props.title.toUpperCase())>-1)?
        <div className="film" key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <ul>
                {item.genre.map((i,z)=>
                    <li key={z} onClick={this.genre.bind(this, i)}>
                       {i}
                    </li>)}
            </ul>
        </div>
             :""

);



        return(
            <div className="content">
                {this.props.searched?
                    searchElement
                    :
                    element}
            </div>   
        )
    }
};

function mapStateToProps(state){
    return state.filmsReducer
  }

export default connect(mapStateToProps)(FilmsPage);
  
