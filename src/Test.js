import React from 'react'
import ReactDOM from 'react-dom'

@testable
class Test extends React.Component{
  constructor(props){
    super(props)
    console.log(this.isTestable)
  }
  
  render(){
    return (
      <div>
        Test
      </div>
    )
  }
}

function testable(target) {
  target.isTestable = true;
}

console.log(Test.isTestable)
export default Test