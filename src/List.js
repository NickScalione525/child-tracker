import React from 'react'
import Child from './Child'
import ChildForm from './ChildForm'
import ChildFrom from './ChildForm'

class List extends React.Component {

    constructor(props){
        super(props)
        this.state = {childList: ["Leo", "Henry", "Harrison", "Riley", "Marlo", "Vera"]}
        this.updateState = this.updateState.bind(this)
    }

    // static defaultProps = {
    //     childList: []
    // }

    updateState(arg){
    this.setState((prevState, prevProps) => {
        return {childList: [...prevState.childList, arg]}
    })
    }

    render(){
       
        return(
            <div>
                <ChildForm/>
        <ul>
            {this.state.childList.map((child, i) => <Child key={i} child={child} i={i}/>)}
        </ul>
        </div>
        )
    }
}

export default List