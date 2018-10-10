import React from 'react'
import ReactDOM from 'react-dom'
import '../module'
import 'moment'
// import '../utils/jq'
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            num: 1
        }
    }
    getState = () => {
        return (
            <div className="header">
            'i am header!！'
            </div>
        )
        
    }
    render(){
        return (
            <div>
             {this.getState()}
            </div>    
        )
    }
}

export default Header