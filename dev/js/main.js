import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// import withExampleBasename from './withExampleBasename'
// import Layout from "./components/Layout"
import store from "./store"
import { fetchUser } from "./actions/userActions"
import { fetchTweets } from "./actions/tweetsActions"
// import routes from './routes'


class Home extends React.Component {
  render(){
    return <h1>Home</h1>
  }
}

class Layout extends React.Component {
  render(){
    return <h1>Layout</h1>
  }
}

class Saurav extends React.Component {
  render(){
    return <h1>Saurav</h1>
  }
}


class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>404 Error.<br/>Page Not Found.</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
      </div>
    )
  }
}

class App extends React.Component {
   handleClick(){
    browserHistory.replace(new Date().getTime().toString());
   }
   render() {
    const ACTIVE = { }
      return (
        <div>
        	<nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="/">React Router Redux Express</a>
              </div>
              <ul class="nav navbar-nav">
                <li><IndexLink to="/" activeStyle={ACTIVE}>Home</IndexLink></li>
                <li><Link  to="/layout" activeStyle={ACTIVE}>Layout</Link></li>
                <li><Link  to="/saurav" activeStyle={ACTIVE}>Saurav</Link></li>
          	</ul>
              <button class="btn btn-danger navbar-btn" onClick={this.handleClick.bind(this)}>Button</button>
            </div>
          </nav>
         {this.props.children}
        </div>
    )
  }
}

// const routes = (<Route path = "/" component = {App}></Route>)

// store.dispatch(fetchUser())
// store.dispatch(fetchTweets())
// store.dispatch({type: "SET_NAME", payload: "Will"})

// const history = syncHistoryWithStore(hashHistory, store)
// const history = withExampleBasename(browserHistory, __dirname)
const app = document.getElementById('app')

/*ReactDOM.render(<Provider store={store}>
	<Layout />
</Provider>, app);*/

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(<Provider store={store}>
    <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="layout" component={Layout}/>
      <Route path="saurav" component={Saurav}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
</Provider>, app);




/*import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

import withExampleBasename from './withExampleBasename'

const ACTIVE = { color: 'red' }

const App = ({ children }) => (
  <div>
    <h1>APP!</h1>
    <ul>
      <li><Link      to="/"           activeStyle={ACTIVE}>/</Link></li>
      <li><IndexLink to="/"           activeStyle={ACTIVE}>/ IndexLink</IndexLink></li>

      <li><Link      to="/users"      activeStyle={ACTIVE}>/users</Link></li>
      <li><IndexLink to="/users"      activeStyle={ACTIVE}>/users IndexLink</IndexLink></li>

      <li><Link      to="/users/ryan" activeStyle={ACTIVE}>/users/ryan</Link></li>
      <li><Link      to={{ pathname: '/users/ryan', query: { foo: 'bar' } }}
                                      activeStyle={ACTIVE}>/users/ryan?foo=bar</Link></li>

      <li><Link      to="/about"      activeStyle={ACTIVE}>/about</Link></li>
    </ul>

    {children}
  </div>
)

const Index = () => (
  <div>
    <h2>Index!</h2>
  </div>
)

const Users = ({ children }) => (
  <div>
    <h2>Users</h2>
    {children}
  </div>
)

const UsersIndex = () => (
  <div>
    <h3>UsersIndex</h3>
  </div>
)

const User = ({ params: { id } }) => (
  <div>
    <h3>User {id}</h3>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="/about" component={About}/>
      <Route path="users" component={Users}>
        <IndexRoute component={UsersIndex}/>
        <Route path=":id" component={User}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))*/