import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';


class Posts extends Component {

  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }

  render() {
  let { posts, request } = this.props;

  if (request.pending === false && request.success === true && posts.lengh > 0){
    return (
      <div>
        <PostsList posts={posts}/>
      </div>
    )
  }else if (request.pending === true && request.success === null) {
    return (
      <div>
        <Spinner />
      </div>
    )
  }else if (request.pending === false && request.error === null) {
    return (
      <div>
        <Alert variant='error' children={request.error} />
      </div>
    )
  }else if (request.pending === false && request.success === true && posts.length === 0) {
    return (
      <div>
        <Alert variant='info' children='No Posts' />
      </div>
      )
    }
  }
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
  loadPosts: PropTypes.func.isRequired,
};

export default Posts;