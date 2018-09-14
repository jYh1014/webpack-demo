import React from 'react'
import ReactDOM from 'react-dom'
import  './styles/app.less'
import { Image } from 'antd'
// import jq from '../utils/jq'
import img from './static/3.png'
import { Button } from 'antd'
class Message extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            num: 1
        }
    }

    add = () => {
        this.state.num ++
        this.setState({
            num: this.state.num 
        })
    }
    minus = () => {
        this.state.num --
        this.setState({
            num: this.state.num 
        })
    }
    render(){
        return (
            <div className="message"> 
             <img src={img} className="messageImg"/>
             <Button onClick={this.add}>点击 + 1</Button>
             <Button onClick={this.minus}>点击 - 1</Button>
             <div>{this.state.num}</div>
            </div>    
        )
    }
}

export default Message