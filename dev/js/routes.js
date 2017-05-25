import React from 'react'
import { Route } from 'react-router'

import Layout from "./components/Layout"

export default <Route path="/" component={Layout}>
  <Route path="/:login/:name" component={Layout} />
  <Route path="/:login" component={Layout} />
  <Route path="/saurav" component={Layout} />
</Route>