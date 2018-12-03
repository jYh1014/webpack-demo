import React from 'react'
import ReactDOM from 'react-dom'

const HOC = (WrappedComponent) =>
  class WrapperComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        value: ''
      }
    }
    getRef(ref) {
      console.log(ref)
      this.hocref = ref;
    }
    componentDidMount() {
    }
    onChange = (e) => {
      console.log(e.target.value)
      this.setState({
        value: e.target.value
      })
    }
    render() {
      const newProps = {
        name: 'hoc',
        onChange: this.onChange,
        value: this.state.value
      }
      return <WrappedComponent {...newProps} {...this.props} ref={ :: this.getRef} />;
    }
  }

export default HOC
