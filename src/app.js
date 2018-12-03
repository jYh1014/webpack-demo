import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import Message from '@/Message.js'
import SubHeader from './SubHeader'
import WrappedComponent from './WrappedComponent'
class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="container"> I am app!!</div>
                <WrappedComponent />
                <Message />
                <SubHeader />
            </div>
        )
    }
}


// export default App
export default hot(module)(App)
