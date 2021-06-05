import React from 'react'

class ChildForm extends React.Component{

    constructor(){
        super()
        this.input = React.createRef()
    }

    handleSubmit(e){
        e.preventDefault()
        debugger

    }


    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" ref={this.input}/>
                <input type="submit"/>
            </form>
        )


    }


}

export default ChildForm