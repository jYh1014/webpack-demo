import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/app.less'
import { hot } from 'react-hot-loader'
import '../module'
import Message from '@/Message.js'
import SubHeader from './SubHeader'
import b from './b'
// import '../utils/jq'
class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="container"> I am app!!</div>
                <Message />
                <SubHeader />
            </div>
        )
    }
}


// export default App
export default hot(module)(App)
