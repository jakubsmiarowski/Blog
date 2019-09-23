import { connect } from 'react-redux';
import { getSinglePost, getRequest, loadSinglePostRequest } from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = state => ({
    posts: getSinglePost(state),
    request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
    loadSinglePosts: () => dispatch(loadSinglePostRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePosts);