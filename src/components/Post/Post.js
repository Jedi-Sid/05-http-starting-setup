import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post"  onClick={props.postSelectHandler}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
        <div>
          <p>{props.body}</p>
        </div>
    </article>
);

export default post;
