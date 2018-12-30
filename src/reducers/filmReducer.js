import initialState from '../json/list-films'


function filmsReducer(state=initialState,action){
    switch(action.type){
        case "GENRE_CHANGE":
            return {...state, genreNow:action.payload} 
        default:
            return state
    }
    
}

export default filmsReducer