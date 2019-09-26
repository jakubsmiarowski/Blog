import React from "react";
import { PropTypes } from "prop-types";
import { withRouter } from "react-router-dom";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import HtmlBox from "../../common/HtmlBox/HtmlBox";
import SmallTitle from "../../common/SmallTitle/SmallTitle";

class PostSingle extends React.Component {
  componentDidMount() {
    const { loadPost, match, resetRequest } = this.props;
    loadPost(match.params.id);
    resetRequest();
  }

  render() {
    const { posts, request } = this.props;
    const textin = request.pending ? (
      <Spinner />
    ) : request.success ? (
      posts ? (
        <article className="post-summary">
          <SmallTitle>{posts.title}</SmallTitle>
          <HtmlBox>{posts.content}</HtmlBox>
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
