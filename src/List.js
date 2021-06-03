import React from 'react'

class List extends React.Component {

    static defaultProps = {
        childList: []
    }


    render(){
        
        return(
        <ul>
            {this.props.childList.map((child, i) => <li key={i}>{child}</li>)}
        </ul>
        )
    }
}

export default List