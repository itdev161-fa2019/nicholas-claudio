import React from 'react';
import PostListItem from './PostListItem';

const PostList = props => {
  const { posts, clickPost } = props;
  return posts.map(post => (
    <PostListItem 
      key={post._id}
      post={post}
      clickPost={clickPost}>
    </PostListItem>
  ));
};

export default PostList;