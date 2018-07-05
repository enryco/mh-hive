import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import App from './App'
// import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Route } from 'react-router-dom'

import settings from './settings.json'
import ReactGA from 'react-ga'
ReactGA.initialize(settings.ga)

ReactDOM.render((
  <BrowserRouter basename="hive">
    <div>
      <Route path="/" render={({ location }) => {
        ReactGA.pageview(location.pathname + location.search)
        return null
      }} />
      <App />
    </div>
  </BrowserRouter>
), document.getElementById('root'))

// registerServiceWorker()
