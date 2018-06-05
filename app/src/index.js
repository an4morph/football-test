import 'react-hot-loader/patch'

import React from 'react'
import { render } from 'react-dom'

import store from './store'
import App from './App'


render(
  <App store={store} />,
  document.getElementById('root')
)
