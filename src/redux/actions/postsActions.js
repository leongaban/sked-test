// IMPORTS / utils / apis
import { get } from '../../controllers/posts';

// ACTION TYPES
export const Actions = {
  GET_ALL_POSTS: 'GET_ALL_POSTS',
  SET_ALL_POSTS: 'SET_ALL_POSTS',
  POSTS_ERROR: 'POSTS_ERROR',
  ADD_POST: 'ADD_POST',
};

// ACTION CREATORS
// const actionGetAllPosts = () => ({ type: Actions.GET_ALL_POSTS, loading: true });

// const actionSetAllPosts = (posts) => ({ type: Actions.SET_ALL_POSTS, posts, loading: false });

// ACTIONS

// Filter all Posts
// export const filterPostsAction = (posts, filter) => (dispatch) => {
//   // Logic to filter here...
//   dispatch(actionSetAllPosts(posts));
// };

// Set Posts
async function setPostsAction(dispatch, url) {
  try {
    const posts = await get();
    console.log('posts', posts);
    dispatch({
      type: Actions.SET_ALL_POSTS,
      posts,
    });
  } catch (err) {
    dispatch({
      type: Actions.POSTS_ERROR,
      posts: [],
    });
  }
  dispatch({
    type: Actions.SET_ALL_POSTS,
    loading: false,
  });
}

// Get Posts
export const getAllPosts = () => {
  console.log('getAllPosts...');
  return (dispatch) => {
    dispatch({
      type: Actions.GET_ALL_POSTS,
      loading: true,
    });
    setPostsAction(dispatch);
  };
};

// Add a Post to Posts.

// Update a Post in Posts.

// Remove a Post from Posts.
