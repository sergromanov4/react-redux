import initialState from '../json/list-films'

function searchReducer(state=initialState,action){
    switch(action.type){
        case "SEARCH":
            
            return {...state, search:{title:action.payload}}
        default:
            return state
    }
    
}

export default searchReducer