import React from "react";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";
import { FacebookProvider, Comments, ShareButton } from 'react-facebook';
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import HtmlBox from "../../common/HtmlBox/HtmlBox";
import SmallTitle from "../../common/SmallTitle/SmallTitle";
import { BASE_URL } from '../../../config.js';

class PostSingle extends React.Component {
  componentDidMount() {
    const { loadPost, match, resetRequest } = this.props;
    loadPost(match.params.id);
    resetRequest();
  }

  render() {
    const { posts, request, location } = this.props;
    const textin = request.pending ? (
      <Spinner />
    ) : request.success ? (
      posts ? (
        <article className="post-summary">
          <SmallTitle>{posts.title}</SmallTitle>
          <HtmlBox>{posts.content}</HtmlBox>
          <FacebookProvider appId="524677441696598">
            <ShareButton href={`${BASE_URL}${location.pathname}`}>
              Share
            </ShareButton>
            <p>Author: {posts.author}</p>
            <Comments href={`${BASE_URL}${location.pathname}`} />
          </FacebookProvider>
        </article>
      ) : (
        <Alert variant="info"> No posts!!! </Alert>
      )
    ) : (
      <Alert variant="error"> {request.error} </Alert>
    );

    return <div> {textin} </div>;
  }
}

PostSingle.propTypes = {
  posts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }),
  loadPost: PropTypes.func.isRequired
};

export default withRouter(props => <PostSingle {...props} />);
