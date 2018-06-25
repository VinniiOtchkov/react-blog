import React, { Component } from 'react';
import { Route, withRouter, Switch, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Navbar, NavItem, Icon } from 'react-materialize';
import './App.css';
import logo from './logo.svg';

import NewPost from './components/NewPost/';
import Preview from './components/Preview/';
import Author from './components/Author/';
import Home from './components/Home/';
import Nav from './components/Nav/';


import * as PostActions from './actions/posts';
import * as CommentActions from './actions/comments';
import * as AuthorActions from './actions/authors';


class App extends Component {

  componentDidMount() {
    this.props.PostActions.fetchPosts();
    this.props.AuthorActions.fetchAuthors();
    this.props.CommentActions.fetchComments();
  }

  goHome(e) {
    e.preventDefault();
    this.props.history.push('/')
    console.log('works!')
  }
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/post/new" component={NewPost} />
          <Route exact path="/post/:id" component={Preview} />
          <Route exact path="/author/:authorName" component={Author} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    PostActions: bindActionCreators(PostActions, dispatch),
    AuthorActions: bindActionCreators(AuthorActions, dispatch),
    CommentActions: bindActionCreators(CommentActions, dispatch)
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));