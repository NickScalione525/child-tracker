import {useSelector, useDispatch} from "react-redux"
import Lists from './Lists'
import ListForm from './ListForm'
import deleteList from '../actions/deleteList'

export default function List(props){
    const lists = useSelector(function(state) {return state.lists})
    const list =  lists.find(list => list.id === parseInt(props.match.params.id))
    const dispatch = useDispatch()



    const handleDelete = () => {
        dispatch(deleteList(list.id))
        props.history.push("/lists")
    }



     return(
         <>
         <h1>
             {list && list.name}
         </h1>
         <button onClick={handleDelete}>Delete List</button>
         <ListForm list={list} />
         </>
     )
}