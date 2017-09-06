import React from "react"
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import JacketsContainer from "../containers/Jackets"

import JacketsIdComponent from "../containers/Jackets/JacketsId"


export default class RootRouter extends React.PureComponent {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <Route path="jackets" component={JacketsContainer} />
          <Route path="jackets/:jacketsId" component={JacketsIdComponent} />
          
        </Route>
      </Router>
    )
  }
}