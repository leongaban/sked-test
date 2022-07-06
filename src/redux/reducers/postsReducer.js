import { Actions } from '../actions/postsActions';

export const defaultPostsState = {
  posts: [],
  loading: true,
};

export const PostsReducer = (state = defaultPostsState, action) => {
  switch (action.type) {
    case Actions.SET_POSTS: {
      const { posts, loading } = action;

      return {
        ...state,
        posts,
        loading,
      };
    }

    default:
      return state;
  }
};
