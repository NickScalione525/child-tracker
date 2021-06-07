import { useSelector } from "react-redux"
import ListForm from './ListForm'

export default function List(props){
    const lists = useSelector(function(state) {return state.lists})
    const list =  props.lists.find(list => list.id === parseInt(props.match.params.id))


    const handleDelete = () => {
        console.log("delete")
    }



     return(
         <>
         <h1>
             {list && list.name}
         </h1>
         <button onClick={handleDelete}>Delete List</button>
         <ListForm />
         </>
     )
}