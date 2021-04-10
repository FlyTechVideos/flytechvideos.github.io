import React from 'react'
import { render } from 'react-dom'
import { GlobalStyles } from 'twin.macro'
import App from './App'
import FlyStylesheet from './assets/Stylesheet'

render(
  <>
    <FlyStylesheet />
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
)
