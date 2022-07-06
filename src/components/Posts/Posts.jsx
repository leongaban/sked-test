import React from 'react';
import { useSelector } from 'react-redux';

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <div>
      Posts
      {/* <ul>
        <li>{posts[0].socialMedia}</li>
        <li>{posts[1].socialMedia}</li>
      </ul> */}
    </div>
  );
};

export default Posts;
