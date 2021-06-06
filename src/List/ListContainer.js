import React, {Component} from 'react'
import List from './List'
import Lists from './Lists'
import ListForm from './ListForm'
import {Route, Switch} from 'react-router-dom'


class ListContainer extends Component {

  constructor(){
    super()
    this.state = {
      lists: ["Henry", "Leo", "Marlo", "Vera", "Harrison", "Riley"]
    }
    this.updateState = this.updateState.bind(this)
  }

  componentDidMount(){
    fetch("http://localhost:3001/lists")
    .then(function(response) {
      return response.json()
    })
    .then((listsArray) => {
      this.setState({lists: listsArray})
    })
  }


  updateState(arg){
    this.setState((prevState, prevProps) => {
      return {lists: [...prevState.lists, arg]}
    })
  }
  
  render(){
    return(
      <switch>
        <Route path="/lists/new">
        <ListForm sendData={this.updateState}/>
        </Route>
        <Route exact path="/lists">
          <Lists lists={this.state.lists}/>
        </Route>
        <Route path="/Lists/:id" render={(routerProps) => <List list={this.state.lists.find(list => list.id === parseInt(routerProps.match.params.id))}/>}/>
        </switch>
    )
  }
}

export default ListContainer