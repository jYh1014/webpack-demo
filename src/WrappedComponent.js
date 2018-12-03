import React from 'react'
import ReactDOM from 'react-dom'
import HOC from './HOC.js'
import { Input } from 'antd'
class WrappedComponent extends React.Component {

  render() {

    return (
      <div>WrappedComponent被包裹组件
        <Input {...this.props} />
      </div>
    )
  }
}

export default HOC(WrappedComponent)