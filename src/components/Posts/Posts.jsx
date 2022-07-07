import React from 'react';
import Circle from '../partials/Circle.jsx';
// import { useSelector } from 'react-redux';

const Posts = ({ scheduledPosts }) => {
  // Redux Solution:
  // const postsState = useSelector((state) => state.posts);

  const socialIcon = (name) => (name === 'FB account' ? '/images/fb-icon.svg' : '/images/ig-icon.svg');
  const iconBg = (name) => (name === 'FB account' ? 'icon light-blue-bg' : 'icon light-pink-bg');

  const listPosts = (posts) =>
    posts.map((post, i) => (
      <div className="post-row" key={i}>
        <div className={iconBg(post.name)}>
          <img src={socialIcon(post.name)} width="20" />
        </div>
        <div className="post-info">
          <div className="timestamp">{post.timestamp}</div>
          <Circle initial={post.initial} name={post.name} />
          <p className="post-name">{post.name}</p>
          <div className="caption">
            <strong>Caption:</strong>
            <p>{post.caption}</p>
          </div>
        </div>
        <div className="sked-logo">
          <img src="/images/sked_social_logo.png" />
        </div>
      </div>
    ));

  return <main className="posts-container">{listPosts(scheduledPosts)}</main>;
};

export default Posts;
