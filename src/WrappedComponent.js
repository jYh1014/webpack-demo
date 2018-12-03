import React from 'react'
import ReactDOM from 'react-dom'
import HOC from './HOC.js'
import Inheritance from './Inheritance.js'
import { Input } from 'antd'
class WrappedComponent extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        name: 'WrappedComponent'
      }
    }
  render() {
    
    return (
      <div isRender={true}>WrappedComponent被包裹组件
        <Input {...this.props} />
      </div>
    )
  }
}

// export default HOC(WrappedComponent)
export default Inheritance(WrappedComponent)