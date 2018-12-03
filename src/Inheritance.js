import React from 'react'
import ReactDOM from 'react-dom'

//反向继承
const Inheritance = (WrappedComponent) =>
  class extends WrappedComponent {

    render() {

      const elementsTree = super.render()
      console.log(elementsTree,this.state)
      if (elementsTree.isRender) {
        return elementsTree
      } else {
        return null
      }

    }
  }

export default Inheritance
