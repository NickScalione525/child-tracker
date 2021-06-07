import { useSelector } from "react-redux"


export default function List(props){
    const lists = useSelector(function(state) {return state.lists})
    const list =  props.lists.find(list => list.id === parseInt(props.match.params.id))
     return(
         <li>
             {list && list.name}
         </li>
     )
}