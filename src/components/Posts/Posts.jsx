import React from 'react';
import { useSelector } from 'react-redux';

const Posts = () => {
  const postsState = useSelector((state) => state.posts);

  const listPosts = (posts) =>
    posts.map((post, i) => (
      <li key={i}>
        {post.accountId} | {post.timestamp}
      </li>
    ));

  return (
    <div>
      Posts
      {listPosts(postsState.posts)}
    </div>
  );
};

export default Posts;
