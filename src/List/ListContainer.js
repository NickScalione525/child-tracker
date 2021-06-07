import React, {Component} from 'react'
import List from './List'
import Lists from './Lists'
import ListForm from './ListForm'
import {Route, Switch} from 'react-router-dom'


class ListContainer extends Component {

  constructor(){
    super()
    this.state = {
      lists: []
    }
    this.updateState = this.updateState.bind(this)
  }

  // componentDidMount(){
  //   fetch("http://localhost:3000/lists")
  //   .then(function(response) {
  //     return response.json()
  //   })
  //   .then((listsArray) => {
  //     this.setState({lists: listsArray})
  //   })
  // }


  updateState(arg){
    this.setState((prevState, prevProps) => {
      return {lists: [...prevState.lists, arg]}
    })
  }
  
  render(){
    return(
      <>
      <Switch>
        <Route path="/lists/new">
        <ListForm />
        </Route>
        <Route exact path="/lists">
          <Lists />
        </Route>
        <Route path="/lists/:id" render={(routerProps) => <List {...routerProps}/>}/>
        </Switch>
        </>
    )
  }
}

export default ListContainer