import React from 'react';
import { PropTypes } from 'prop-types';

class PostCounter extends React.Component {

    render() {
        const {posts} = this.props;

        return (
            <div>
            {posts > 0 ? 'Posts amount: ' + posts : ' No posts '}
            </div>
        )
        console.log(PostCounter)
    }
}
PostCounter.propTypes = {
  posts: PropTypes.number,
};

export default PostCounter;