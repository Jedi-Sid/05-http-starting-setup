import React, {Component} from 'react';
import './Blog.css';
import Posts from 'containers/Blog/Posts/Posts'
import NewPost from 'containers/Blog/NewPost/NewPost'
import {Route, Link} from 'react-router-dom';

class Blog extends Component {

  render() {

    return (<div className="Blog">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={{
                  pathname: '/new-post',
                  hash: '#submit',
                  search: '?quick-submit=true'
                }}>New Post</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Route path="/" exact="exact" component={Posts}/>
      <Route path="/new-post" component={NewPost}/>
    </div>);
  }
}

export default Blog;
