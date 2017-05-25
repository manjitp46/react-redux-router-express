import React from 'react'
import {
    connect
} from "react-redux"
import {
    Button,
    Form,
    FormGroup,
    FormControl,
    ControlLabel
} from 'react-bootstrap'

import store from "../store"
import {
    fetchUser,
    setUserName,
    setUserAge
} from "../actions/userActions"
import {
    fetchTweets
} from "../actions/tweetsActions"

import Nav from "./Nav"

/*@connect((store) => {
	return {
		users: store.user,
		user: store.user.user,
		userFetched: store.user.fetched,
		tweets: store.tweets.tweets,
	};
})*/

/*export default */

class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            username: ''
        };
        // console.log(this);
    }

    componentDidMount() {
        // console.log(this);
        // console.log('componentDidMount')
        this.props.fetchTweets()
    }

    componentWillMount() {
        // console.log(this);
        // console.log('componentWillMount')
        setTimeout(() => {
            this.props.fetchUser()
        }, 2000);
        setTimeout(() => {
            this.props.setUserName('Gaurav')
        }, 4000);
        setTimeout(() => {
            this.props.setUserAge(16)
        }, 7000);
    }

    fetchTweets() {
        // store.dispatch(fetchTweets())
        this.props.fetchTweets()
        // console.log(this.props)
    }

    _handleValidSubmit(e) {
        e.preventDefault();
        // console.log(e)
        this.props.setUserName(this.state.username);
    }

    _handleNameChange(e) {
        // console.log(e.target.value)
        this.setState({username: e.target.value});
        // this.props.setUserName(e.target.value);
    }

    render() {
        const {
            user,
            users,
            tweets,
            nav
        } = this.props;
        console.log(nav.navName)
        /*if(!tweets.length){
        	return <button class="btn btn-primary" onClick={this.fetchTweets.bind(this)}>load tweets</button> 
        }*/
        const mappedTweets = tweets.map((tweet, i) => {
            if (tweet.text) {
                return <li key = {i} > {tweet.text} < /li>
            } else {
                // return <li key={i}>{tweet.id}</li>
            }
        })
        if(nav.navName == "layout"){
            return ( 
                <div>
                    <Nav />
                    Layout
                </div> 
            )
        }else {
            return ( 
                <div>
                    <Nav />
                    <h1> {user.name} </h1>
                    <h2> {user.age} </h2> {users.fetched ? null : <img src="spin.svg" />}
                    <ul>{mappedTweets}</ul>
                    {(!tweets.length) ? <button class="btn btn-success" onClick={ this.fetchTweets.bind(this) }> load tweets </button> : null }
                    <br />
                    <br />
                    <Form onSubmit={ this._handleValidSubmit.bind(this) }>
                        <FormGroup controlId="formInlineName">
                            <ControlLabel> 
                                Name
                            </ControlLabel>
                            <FormControl type="text" name='name' defaultValue={ this.state.username } onChange={ this._handleNameChange.bind(this) } autoComplete='off' />
                        </FormGroup>
                        <Button bsStyle="success" type="submit"> Submit </Button>
                    </Form>
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        users: state.user,
        user: state.user.user,
        userFetched: state.user.fetched,
        tweets: state.tweets.tweets,
        nav: state.nav
    };
}

function matchDispatchToProps(dispatch) {
    return {
        fetchUser() {
            dispatch(fetchUser());
        },
        setUserName(name) {
            dispatch(setUserName(name));
        },
        setUserAge(age) {
            dispatch(setUserAge(age));
        },
        fetchTweets() {
            dispatch(fetchTweets());
        }
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(Layout);