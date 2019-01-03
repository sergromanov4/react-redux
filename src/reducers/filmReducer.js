import initialState from '../json/list-films'


function filmsReducer(state=initialState,action){
    switch(action.type){
        case "GENRE_CHANGE":
            return {...state, genreNow:action.payload}
        case "SEARCH":   
            return {...state, title:action.payload}
        case "SEARCHED":   
            return {...state, searched:action.payload}     
        default:
            return state
    }
    
}

export default filmsReducer