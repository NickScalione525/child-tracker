export default function listsReducer(state, action) {
    console.log(action)
    switch (action.type) {
        case "ADD_LIST":
            return {lists: [...state.lists, action.payload]}
        case "DELETE_LIST":
            return {lists: state.lists.filter(list => list.id !== action.payload)}
        case "EDIT_LIST":
            const editedListsArray = state.lists.map(list => list.id === action.payload.id ? action.payload : list)
            return {lists: editedListsArray}
            default:
            return state
    }
    
    



}