import React from 'react';
import { Card, CardTitle } from 'react-materialize';
import './Post.css';

const Post = (props) => {
    let { post, comments, history } = props;
    const reducedTitle = props.post.title.slice(0,15);
    const reducedBody = props.post.body.slice(0,30);

    return (
        <div>
            <Card className="card" header={<CardTitle reveal image={"user_icon.png"} waves='purple' />}
                title={post.title}
                reveal={<p>{props.post.body}</p>}>
                <p><a href="#">Author: {post.author}</a></p>
                <p>{props.post.body.length > 30 ? reducedBody: props.post.body} </p>

            </Card>
        </div>
    )
}

export default Post
