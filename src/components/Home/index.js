import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal } from 'react-materialize';
import Post from '../Post';


class Home extends Component {

  renderPostList = () => this.props.posts.map((post, i) => {
    let comments = this.props.comments.filter(({id}) => id === post.id)
    let [author] = this.props.authors.filter(({ id }) => id === post.userId)
    return (
      <Post key={i} post={post} comments={comments} author={author} />
    )
  })

  render() {
    let showSuccessMessage = this.props.history.action === 'PUSH'
    console.log(this.props);
    return (
      <div>
        { showSuccessMessage ? 
        <Modal
          header='Post Success!'
          open={true}>
          <p>Your post will now be displayed at the top of the list</p>
        </Modal> : null}
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

export default connect(mapStateToProps, null)(Home);
