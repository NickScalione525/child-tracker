import React from 'react'
import List from './List'


class App extends React.Component {

handleClick(e){
  debugger
  console.log("clicked!")
}

render(){
  return(
  <div>
    <h1 className="greeting">Track your Grandkids</h1>
    <List />
  </div>
  )
  
}
}

// App inherits from compnent class for react library

export default App