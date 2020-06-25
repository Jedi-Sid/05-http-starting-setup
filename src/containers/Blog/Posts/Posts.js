import React, { Component } from 'react';
import axios from '../../../axios'
import Post from 'components/Post/Post'
import './Posts.css';


class Posts extends Component {

  state = {
    posts: []
  }



  componentDidMount() {
    
    axios.get('/posts').then(response => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: 'Max'
        }
      })
      this.setState({posts: updatedPosts})
       console.log(response);

    })
    .catch(err => {
      this.setState({error:true})
      console.log(err);
    })
  }



  postSelectHandler = (id) => {
    this.setState({selectedPostId: id});
  }


 render(){
   let posts = null;


   if(!this.state.error) {
    posts = this.state.posts.map(post => {
     return <Post key={post.id} title={post.title} author={post.author} body={post.body} postSelectHandler={() => this.postSelectHandler(post.id)}/>
   })
   }
   else {
      posts = <p>Error!</p>
   }




    return (
      <section className="Posts">
        {posts}
      </section>
);
}

}

export default Posts;
