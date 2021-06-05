import React from 'react'

class ChildForm extends React.Component{

    constructor(){
        super()
        this.state = {childName: "", childAge: 0}
    }

    handleSubmit(e){
        e.preventDefault()
        

    }

    handleChange(e){
        console.log("changed")
        this.setState({[e.target.name]: e.target.value})
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" onChange={this.handleChange.bind(this)}  value={this.state.childName} name="childName"/>
                <input type="text" onChange={this.handleChange.bind(this)}  value={this.state.childAge} name="childAge"/> 
                <input type="submit"/>
            </form>
        )


    }


}

export default ChildForm