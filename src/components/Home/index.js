import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-materialize';
import Post from '../Post';


class Home extends Component {
  constructor() {
    super()
    this.state = {
      postCount: 0,
      showSuccessMessage: false
    }
  }

  dismissSuccessMessage() {
    this.setState({ showSuccessMessage: false })
  }

  setCount() {
    this.setState({ postCount: this.props.posts.length })
  };

  checkChange() {
    if (this.props.posts && this.props.history.action !== 'POP') {
      if (this.state.postCount !== this.props.posts.length) {
        this.setState({ showSuccessMessage: true })
        this.setCount()
      }
    }
  }

  componentDidMount() {
    this.setCount();
  }

  componentDidUpdate() {
    this.checkChange()
  }

  renderPostList = () => this.props.posts.map((post, i) => {
    let comments = this.props.comments.filter(({ id }) => id === post.id)
    let [author] = this.props.authors.filter(({ id }) => id === post.userId)
    return (
      <Post key={i} post={post} comments={comments} author={author} />
    )
  })

  render() {
    let { showSuccessMessage } = this.state
    // let showSuccessMessage = this.props.history.action === 'PUSH'
    return (
      <div>
        {showSuccessMessage ?
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
