import initialState from '../json/list-films'

function searchReducer(state=initialState,action){
    switch(action.type){
        case "SEARCH":   
            return {...state, title:action.payload}
        case "SEARCHED":   
            return {...state, searched:action.payload}
        default:
            return state
    }
    
}

export default searchReducer