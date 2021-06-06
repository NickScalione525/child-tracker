export default function List(props){
    // const list =  props.lists.find(list => list.id === parseInt(props.match.params.id))
     return(
         <li>
             {props.list && props.list.name}
         </li>
     )
}