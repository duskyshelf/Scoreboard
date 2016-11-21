import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Home from './containers/Home'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
)
