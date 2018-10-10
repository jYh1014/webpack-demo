import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Color from './Color'
class SubHeader extends Header{
    constructor(props){
        super(props)
    }
    toggleColor = (index) => {
        console.log(index)
        let link = null
        if (document.querySelector("#skin")) {
            link = document.querySelector("#skin")
        } else {
            link = this.createLink()
            document.head.appendChild(link)
        }
        switch (index) {
            case 0:
                link.href = 'blueTheme' + '.css'
                break;
          
            default:
                link.href ='orangeTheme' + '.css'
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
             <Color />
            </div>    
        )
    }
}

export default SubHeader