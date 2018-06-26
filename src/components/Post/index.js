import React from 'react';
import { Card, CardTitle } from 'react-materialize';
import { Link } from 'react-router-dom'
import './Post.css';

const Post = (props) => {
    let { post, author } = props;
    let authorName = author ? author.name : 'Anonymous';
    const reducedTitle = post.title.slice(0,15);
    const reducedBody = post.body.slice(0,30);
    return (
        <div>
         <Card 
                className="card" 
                header={ <CardTitle title={authorName} image={"user_icon.png"}/>}
                title={post.title.length > 15 ? `${reducedTitle}...` : post.title}
                reveal={<p>{post.body}</p>}>
                <p>{post.body.length > 30 ? `${reducedBody}...`: post.body} </p>
                <p><b>Author</b>:</p>{authorName ===  'Anonymous' ? <p>{authorName}</p> : <Link to={`/author/${authorName}`}>{authorName}</Link>}
                <br />
                 <Link to={{
                     pathname:`/post/${post.id}`,
                     }}>View Post</Link>
            </Card>
        </div>
    )
}

export default Post
