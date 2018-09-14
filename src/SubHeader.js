import React from 'react'
import ReactDOM from 'react-dom'
import  './styles/app.less'
import '../module'
import Header from './Header'
class SubHeader extends Header{
    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <div>
            {this.getState()}
             i am subHeader
            </div>    
        )
    }
}

export default SubHeader