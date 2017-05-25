import React from 'react';
import { connect } from "react-redux"
import { fetchNav, setNav } from "../actions/navActions"
import store from "../store"

class Nav extends React.Component {
    constructor() {
        super();
    }
    handleNavChange(navName) {
        this.props.setNav(navName);
    }
    render() {
      return (
         <div>
            <nav class="navbar navbar-inverse">
              <div class="container-fluid">
                <ul class="nav navbar-nav">
                    <li><a class="pointer" onClick={this.handleNavChange.bind(this, 'home')}>Home</a></li>
                    <li><a class="pointer" onClick={this.handleNavChange.bind(this, 'layout')}>Layout</a></li>
                </ul>
              </div>
            </nav>
           {this.props.children}
         </div>
      )
   }
}

function mapStateToProps(state) {
    return {
        nav :state.nav
    };
}

function matchDispatchToProps(dispatch) {
    return {
        fetchNav() {
            dispatch(fetchNav());
        },
        setNav(age) {
            dispatch(setNav(age));
        }
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(Nav);