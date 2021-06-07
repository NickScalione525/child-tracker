import React, { useReducer } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'


class ListForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {name: ""}
  }

  handleSubmit(e) {
    e.preventDefault()
    const body = {list: this.state}
    // fetch("http://localhost:3000/lists", {
    //     method: "POST",
    //     headers: {Accept: "application/json", "Content-Type": "application/json"},
    //     body:JSON.stringify(body)
    // }).then(r => r.json())
    // .then(list => this.props.sendData(list))
    const list = {name: this.state.name, id: Math.floor(Math.random() * Math.floor(1000000000))}
    // this.props.dispatch({type: "ADD_LIST", payload: list})
    this.props.addList(list)
    this.setState({name: ""})
    this.props.history.push("/lists")
}

  handleChange = (e) => {this.setState({[e.target.name]: e.target.value})}


  render = () => {

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" onChange={this.handleChange} value={this.state.name} name="name"/>

        <input type="submit"/>
      </form>
  )
  }

}

const mapDispatchToProps = (dispatch) => {

  return {
    addList: function(list){dispatch({type: "ADD_LIST", payload: list})},
    editList: function(list){dispatch({type: "EDIT_LIST", payload: list})}

  }


}


export default withRouter(connect(null, mapDispatchToProps)(ListForm))