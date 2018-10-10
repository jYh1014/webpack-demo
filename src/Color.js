import React from 'react'
import ReactDOM from 'react-dom'
import { SketchPicker } from 'react-color'
class Color extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
   
    render(){
        return (
            <div>
              <SketchPicker />
            </div>    
        )
    }
}

export default Color