import React, { Component } from 'react';
import axios from 'axios'

import './FullPost.css';

class FullPost extends Component {
  state = {
       downloadedPost: null
   }

  componentDidUpdate () {
       if ( this.props.id ) {
           if ( !this.state.downloadedPost || (this.state.downloadedPost && this.state.downloadedPost.id !== this.props.id) ) {
               axios.get( '/posts/' + this.props.id )
                   .then( response => {
                       // console.log(response);
                       this.setState( { downloadedPost: response.data } );
                   } );
           }
       }
   }


   deletePostHandler =  () => {
     axios.delete('/posts/' + this.props.id)
     .then(response =>{
       console.log(response);

     })

   }



    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.downloadedPost ) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.downloadedPost.title}</h1>
                    <p>{this.state.downloadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;
