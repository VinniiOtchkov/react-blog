import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Collection, CollectionItem, Input, Button, Modal } from 'react-materialize';
import * as CommentActions from '../../actions/comments';
import './Preview.css';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      email: '',
      commentFields: false
    };
  }

  updateField({ target: { value } }, field) {
    field === 'title' ?
      this.setState({ title: value }) :
      field === 'body' ?
        this.setState({ body: value }) :
        this.setState({ email: value })
  }

  openCommentFields = () => {
    this.setState({ commentFields: true })
  }

  closeCommentFields = () => {
    this.setState({ commentFields: false })
    this.setState({ title: '', body: '' })
  }

  submitComment = (e) => {
    e.preventDefault();
    let { title, body, email, commentFields, post } = this.state;
    if (title === '' || body === '' || email === '') {
      alert('Comment fields cannot be blank');
    }

    this.props.CommentActions.addComment({ name: title, body: body, email: email, postId: +this.props.match.params.id })

    this.setState({ commentFields: false, title: '', body: '', email: '' })
  }

  render() {
    let { title, body, email, commentFields } = this.state
    let [post] = this.props.posts.filter(
      post => post.id === +this.props.match.params.id
    );
    let [author] =
      post && post.id
        ? this.props.authors.filter(author => author.id === post.userId)
        : '';
    let filteredComments = this.props.comments ? this.props.comments
      .filter(
        comment => comment.postId === +this.props.match.params.id)
      .slice(0, 5)
      .map((comment, i) => (
        <CollectionItem key={i}>
          <h5>{comment.name}</h5>
          {comment.body}
          <br />
          <b>{comment.email}</b>
        </CollectionItem>
      )
      ) : 'Loading...';
    return (
      <div>
        <h5>{post ? post.title : 'Loading...'}</h5>
        <p>{post ? post.body : 'Loading...'}</p>
        <p>
          <b>Author</b>:{' '}
          {author ? (
            <Link
              to={{
                pathname: `/author/${author.name}`,
              }}
            >
              <b>{author.name}</b>
            </Link>
          ) : (
              'No Profile'
            )}
        </p>
        {commentFields ?
          <div className="formContainer">
            <Input placeholder="Title" value={title} onChange={(e) => this.updateField(e, 'title')} />
            <Input placeholder="Body" value={body} onChange={(e) => this.updateField(e, 'body')} />
            <Input placeholder="Email Address" value={email} onChange={(e) => this.updateField(e, 'email')} />
            <Button style={{ margin: '2%' }} onClick={(e) => this.submitComment(e)} waves='light'>Submit</Button>
            <Button waves='light' onClick={this.closeCommentFields}>Cancel</Button>
          </div> :
          <Button waves='light' onClick={this.openCommentFields}>Add Comment</Button>
        }


        <Collection className="commentList">
          {filteredComments}
        </Collection>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    comments: state.comments,
    authors: state.authors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    CommentActions: bindActionCreators(CommentActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);
