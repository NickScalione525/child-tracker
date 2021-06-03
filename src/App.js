import React from 'react'
import List from './List'

class App extends React.Component {

render(){
  let listFromApp = ["Leo", "Henry"]
  return(
  <div>
    <h1 className="greeting">Hello World</h1>
    <List childList={listFromApp}/>
  </div>
  )
  
}
}

// App inherits from compnent class for react library

export default App