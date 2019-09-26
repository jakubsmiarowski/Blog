import React from 'react';
import { PropTypes } from 'prop-types';
import './PostSummary.scss';
import { Link } from 'react-router-dom';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from "../../common/HtmlBox/HtmlBox";
import cutText from '../../../cutText/cutText';

const PostSummary = ({ id, title, content, author }) => (
  <article className="post-summary">
    <SmallTitle>{title}</SmallTitle>
    <HtmlBox>{cutText(content, 250)}</HtmlBox>
    <Button variant="primary">
    <Link to={`/posts/${id}`}>Read more</Link>  
    </Button>
    <p>Author: {author}</p>
  </article>
);

PostSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
};

export default PostSummary;