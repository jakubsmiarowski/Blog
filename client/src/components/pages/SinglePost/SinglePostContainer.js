import { connect } from 'react-redux';
import { getSinglePost, getRequest, loadPostsRequest } from '../../../redux/postsRedux';
import Posts from './Posts';

const mapStateToProps = state => ({
    posts: getSinglePost(state),
    request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPostsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);