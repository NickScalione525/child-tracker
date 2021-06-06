import React from 'react'

class ChildForm extends React.Component{

    constructor(props){
        super(props)
        this.state = {childName: ""}
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.sendData(this.state.childName)
        this.setState({childName: ""})
        

    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" onChange={this.handleChange.bind(this)}  value={this.state.childName} name="childName"/> 
                <input type="submit"/>
            </form>
        )


    }


}

export default ChildForm