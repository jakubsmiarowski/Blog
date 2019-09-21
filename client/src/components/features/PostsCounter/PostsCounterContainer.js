import { connect } from 'react-redux';
import { getPostsNumber } from '../../../redux/postsRedux';
import PostsCounter from './PostsCounter';

const mapStateToProps = state => ({
    posts: getPostsNumber(state),
});

export default connect(mapStateToProps)(PostsCounter);