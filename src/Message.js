import React from 'react'
import ReactDOM from 'react-dom'
import { Image } from 'antd'
import utils from 'Utils'
import {fromJS,Map} from 'immutable'
import clonedeep from 'lodash.clonedeep'
import img from './static/3.png'
import { Button ,Pagination, Tabs, Switch } from 'antd'
const TabPane = Tabs.TabPane
class Message extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: Map({ num: 0 })
        }
    }

    add = () => {
        /*
        ** 深拷贝
        */
        // let data = clonedeep(this.state.data)
        // data.num = data.num + 1
        // console.log(data)
        // this.setState({data: data},function(){
        //     console.log(this.state.data)
        // })
        // console.log(this.state.data.num)


        /*
        ** immutable
        */
       let data = this.state.data.update('num', v => v + 1)
       this.setState({ data:  data});
        console.log(this.state.data.get('num'))
        // this.state.num ++
        // this.setState({
        //     num: this.state.num 
        // })
    }
    minus = () => {
        this.state.num --
        this.setState({
            num: this.state.num 
        })
    }
    componentDidMount = () => {
        // let $$data = fromJS(this.state.data)
        // this.setState({data: $$data})
        const data = {num: 10}
       const promise = new Promise(function(resolve, reject){
            if(true){
                resolve(data)
            }else{
                reject()
            }
       })
       promise.then(value => {
           this.setState({
               account: value.num
           })
       })
       let obj = {'0':111,length:1}
       let a = [].slice.call(obj)
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
             <br />
             <Button onClick={this.add} type="primary">点击 + 1</Button>
             <Button onClick={this.minus} type="primary">点击 - 1</Button>
            </div>    
        )
    }
}

export default Message