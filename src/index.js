import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)

