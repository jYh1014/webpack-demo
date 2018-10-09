import React from 'react'
import ReactDOM from 'react-dom'
import  './styles/app.less'
import { Image } from 'antd'
import utils from 'Utils'
import img from './static/3.png'
import { Button } from 'antd'
// import b from './b'
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
    componentDidMount = () => {
        const data = {num: 10}
       const promise = new Promise(function(resolve, reject){
            if(true){
                resolve(data)
            }else{
                reject()
            }
       })
       promise.then(value => {
        //    console.log(value)
           this.setState({
               account: value.num
           })
       })
       let obj = {'0':111,length:1}
       let a = [].slice.call(obj)
       console.log(a)
    }
    render(){
        const { account } = this.state
        const arr = Array.from(new Set([11,21,21,31]))
        return (
            <div className="message"> 
             {/* <img src={img} className="messageImg"/> */}
             {/* {account}
             {
                 arr.map(item => {
                     return (
                         <span key ={item}>{item}</span>
                     )
                 })
             } */}
             <Button onClick={this.add} type="primary">点击 + 1</Button>
             <Button onClick={this.minus} type="primary">点击 - 1</Button>
            </div>    
        )
    }
}

export default Message