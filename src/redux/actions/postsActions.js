// IMPORTS / utils / apis

// ACTION TYPES
export const Actions = {
  GET_ALL_POSTS: 'GET_ALL_POSTS',
  SET_ALL_POSTS: 'SET_ALL_POSTS',
  ADD_POST: 'ADD_POST',
};

// ACTION CREATORS
// const actionGetAllPosts = () => ({ type: Actions.GET_ALL_POSTS, loading: true });

const actionSetAllPosts = (posts) => ({ type: Actions.SET_ALL_POSTS, posts, loading: false });

// ACTIONS

// Get all Posts
// API call here... (actionGetAllPosts)

// Set all Posts
export const setPostsAction = (posts) => (dispatch) => {
  dispatch(actionSetAllPosts(posts));
};

// Filter all Posts
export const filterPostsAction = (posts, filter) => (dispatch) => {
  // Logic to filter here...
  dispatch(actionSetAllPosts(posts));
};

// Add a Post to Posts.

// Update a Post in Posts.

// Remove a Post from Posts.
