import React from 'react'


class Child extends React.Component {

    sendInfoBack(){
        this.props.callBackFn("No. 7")
    }


    render(){
        return <div> 
         <li key={this.props.i}>{this.props.child}</li>
         </div>

    }



}



export default Child