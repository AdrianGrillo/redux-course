import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import App from './components/App'
import { createStore } from 'redux'

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)