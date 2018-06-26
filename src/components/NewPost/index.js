import React, { Component } from 'react';
import { Row, Input, Button, Icon } from 'react-materialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as PostActions from '../../actions/posts';
import './NewPost.css';

class NewPost extends Component {
  constructor() {
    super()
    this.state = {
      checked: false,
      title:'',
      body:'',
      authorID: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggleCheckbox = () => {
    this.setState({ checked: !this.state.checked, authorID: 0  })
  }

  updateField = ({target:{value}}, field) => {
    field === 'title' ? 
    this.setState({title: value}) : 
    field === 'body' ? 
    this.setState({body: value}) : 
    this.setState({authorID: parseInt(value)})
  }

  handleSubmit = () => {
    let { title, body, authorID} = this.state;
    if(title.length !== 0 && body.length !== 0 && authorID.length !== 0){
      this.props.PostActions.addPost({userId:authorID, title, body})
      this.props.history.push('/')
    } else {
      alert(`All three fields must be filled in to submit a post`)
    }
  }
  render() {
    let { title, body, authorID} = this.state
    return (
      <div className="formContainer">
      <h3>Add a Post</h3>
        <Input onChange={(e) => this.updateField(e,'title')} value={title} label="Title" />
        <Input onChange={(e) => this.updateField(e,'body')} value={body} label="Body" />
        {this.state.checked ?

          <Input type='number' value={0} className="disabledField" disabled label="(Anonymous)" />
          :
          <Input type='number' onChange={(e) => this.updateField(e,'authorID')} value={authorID} label="Author ID" />

        }
        <Input type='checkbox' onClick={this.toggleCheckbox} label='Post Anonymously?' />
        <br />
        <Button onClick={this.handleSubmit} waves='light'><Icon left>book</Icon>Submit</Button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    PostActions: bindActionCreators(PostActions,dispatch)
  }
}

export default connect(null,mapDispatchToProps)(NewPost);