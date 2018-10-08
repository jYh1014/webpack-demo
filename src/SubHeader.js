import React from 'react'
import ReactDOM from 'react-dom'
import  './styles/app.less'
import '../module'
import Header from './Header'
import b from './b'
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