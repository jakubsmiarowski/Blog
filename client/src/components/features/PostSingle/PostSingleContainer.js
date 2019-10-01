import { connect } from 'react-redux';
import { getRequest, loadSinglePostRequest, getSinglePost, resetRequest } from '../../../redux/postsRedux';
import PostSingle from './PostSingle';

const mapStateToProps = state => ({
    posts: getSinglePost(state),
    request: getRequest(state),
    reset: resetRequest(state),
})

const mapDispatchToProps = dispatch => ({
    loadPost: (id) => dispatch(loadSinglePostRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostSingle);