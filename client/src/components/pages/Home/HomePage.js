import React from 'react';
import Posts from '../../features/Posts/PostsContainer';
import PageTitle from '../../common/PageTitle/PageTitle'

const HomePage = () => (
  <div>
    <PageTitle>Blog</PageTitle>
    <Posts postsPerPage={3} pagination={false} />
</div>
);

export default HomePage;