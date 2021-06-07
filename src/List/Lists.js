import React, {Component, Fragment} from 'react'
import List from './List'
import ListForm from './ListForm'
import {Redirect} from "react-router-dom"
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'






class Lists extends Component {
    

        constructor(){
            super()
            this.state = {redirect: false}
        }

        handleClick(){
            this.setState({redirect: true})
        }


        render(){
    
            return (
                <>
               <ul>
                    {this.props.lists && this.props.lists.map((list, i) => <li><Link to={`/lists/${list.id}`} >{list.name}</Link></li>)}
                    </ul>
                </>
            )
        }
    }
        function mapStateToProps(state){

            return{lists: state.lists}

        }
    

export default connect(mapStateToProps)(Lists)