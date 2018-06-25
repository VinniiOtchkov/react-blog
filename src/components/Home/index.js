import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Post from '../Post';


class Home extends Component {

  renderPostList = () => this.props.posts.map((post,i) => {
    let comments = this.props.comments.filter(comment => comment.postId === post.id)
    let [author] = this.props.authors.filter(({id}) => id === post.userId)
    return(
      <Post key={i} post={post} comments={comments} author={author}/>
    )
  })

  render() {
    return (
      <div>
        {this.renderPostList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments,
    authors: state.authors
  }
}

export default connect(mapStateToProps,null)(Home);
