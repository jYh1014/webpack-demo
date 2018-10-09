import React from 'react'
import ReactDOM from 'react-dom'
import  './styles/app.less'
import '../module'
import Header from './Header'
// import b from './b'
class SubHeader extends Header{
    constructor(props){
        super(props)
    }
    toggleColor = (index) => {
        console.log(index)
        let origin = location.origin
        let link = null
        if (document.querySelector("#skin")) {
            link = document.querySelector("#skin")
            link.id = "refSkin"
        } else {
            link = this.createLink()
            link.id = "refSkin"
            document.head.appendChild(link)
        }
        switch (index) {
            case 0:
                link.href = 'blueTheme' + '.css'
                break;
          
            default:
                link.href ='blueTheme' + '.css'
                break;
        }
    }
    createLink = () => {
        let element = document.head.querySelector('.el-element')
        // if(element){

        //     element.parentNode.removeChild(element)
        // }

        let origin = location.origin
        let link = document.createElement('link')
        link.className = 'el-element'
        link.rel = 'stylesheet'
        link.type = 'text/css'
        link.id = 'skin'
        return link
    }
    render() {
        const themes = ['rgb(255, 145, 58)','rgb(0, 102, 179)']
        return (
            <div>
            {this.getState()}
             i am subHeader
             <h2>切换主题</h2>
             {
                 themes.map((item ,index)=> {
                     let style = {background: item}
                     return (
                         <span style={style} key={index} className="theme" onClick={this.toggleColor.bind(this,index)}></span>
                     )
                 })
             }
            </div>    
        )
    }
}

export default SubHeader