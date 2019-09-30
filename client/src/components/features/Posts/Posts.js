import React from "react";
import { PropTypes } from "prop-types";
import PostsList from "../PostsList/PostsList";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import Pagination from "../../common/Pagination/Pagination";

class Posts extends React.Component {
  componentDidMount() {
    const { loadPostsByPage, postsPerPage, initialPage } = this.props;
    loadPostsByPage(initialPage || 1, postsPerPage);
  }

  loadPostsPage = page => {
    const { loadPostsByPage, postsPerPage } = this.props;
    loadPostsByPage(page, postsPerPage);
  };

  render() {
    const { posts, request, pages, pagination, presentPage } = this.props;
    const { loadPostsPage } = this;

    const textin = request.pending ? (
      <Spinner />
    ) : request.success ? (
      posts.length > 0 ? (
        <div>
          <PostsList posts={posts} />
          {pagination && (
            <Pagination
              pages={pages}
              initialPage={presentPage}
              onPageChange={loadPostsPage}
            />
          )}
        </div>
      ) : (
        <Alert variant="info"> No posts!!! </Alert>
      )
    ) : (
      <Alert variant="error"> {request.error} </Alert>
    );

    return <div> {textin} </div>;
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      pages: PropTypes.number.isRequired
    })
  ),
  loadPostsByPage: PropTypes.func.isRequired
};

export default Posts;
