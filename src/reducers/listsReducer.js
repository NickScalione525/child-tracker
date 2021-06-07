export default function listsReducer(state, action) {
    console.log(action)
    switch (action.type) {
        case "ADD_LIST":
            return {lists: [...state.list, action.payload]}
            default:
            return state
    }
    
    



}