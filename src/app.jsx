import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './page-index'
import ScaleUp from './scale-up'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Index} />

        <Route path="/scale-up" exact component={ScaleUp} />
      </Switch>
    </Router>
  )
}

export default App
