import React from 'react'
import ReactDOM from 'react-dom'
import { Image } from 'antd'
import utils from 'Utils'
import img from './static/3.png'
import { Button ,Pagination, Tabs, Switch } from 'antd'
const TabPane = Tabs.TabPane
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
    }
    render(){
        const { account } = this.state
        const arr = Array.from(new Set([11,21,21,31]))
        return (
            <div className="message"> 
            <br />
            <Pagination defaultCurrent={6} total={500} />
            <br />
            <Tabs defaultActiveKey="1" >
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
            <br />
            <Switch defaultChecked />
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