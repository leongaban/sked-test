import { get } from '../../controllers/posts';

// ACTION TYPES
export const Actions = {
  GET_POSTS: 'GET_POSTS',
  SET_POSTS: 'SET_POSTS',
  POSTS_ERROR: 'POSTS_ERROR',
  ADD_POST: 'ADD_POST',
};

// ACTIONS

// Filter Posts

// Set Posts
async function setPostsAction(dispatch) {
  try {
    const posts = await get();
    dispatch({
      type: Actions.SET_POSTS,
      posts,
      loading: false,
    });
  } catch (err) {
    dispatch({
      type: Actions.POSTS_ERROR,
      posts: [],
    });
  }
}

// Get Posts
export const getAllPosts = () => {
  return (dispatch) => {
    dispatch({
      type: Actions.GET_POSTS,
      loading: true,
    });
    setPostsAction(dispatch);
  };
};
