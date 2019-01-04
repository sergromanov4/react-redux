import React from 'react';
import {connect} from 'react-redux'


class EachFilm extends React.Component{
    clear(){
        this.props.clearID()
        this.props.clearShowEachFilm()
    }

    render(){
        const element =  this.props.films.map((item)=>
        (item.id==+this.props.eachID)?
        <div className="big-film" key={item.id}>
            <img src={item.image} alt={item.title}  />
           
           
            <div className="big-text-info">
            <h1>{item.title}</h1>
            <br/>
            <p>{item.info}</p>
            <br/>
            <ul>    <li>Жанры фильма:</li>
                {item.genre.map((i,z)=>
                    <li key={z}>
                       {i}
                    </li>)}
            </ul>

            <h3>Смотерть трейлер</h3>
            
            <iframe  src={item.videoURL} 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
            </iframe>  
            <div className="for-button">  
                <button onClick={this.clear.bind(this)}>Вернуться назад</button> 
            </div>    
            </div>
        </div>
        :''
        );

        return(
            <div className="big-film-content">
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
        clearID:()=>{
            dispatch(
                {
                    type:"CHANGE_ID",
                    payload: ''
                 }
            )
        },
        clearShowEachFilm:()=>{
            dispatch(
                {
                    type:"CHANGE_SHOW_FILM",
                    payload: false
                 }
            )
        },
 }
}

export default connect(mapStateToProps,mapDispatchToProps)(EachFilm);