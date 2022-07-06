import { Actions } from '../actions/postsActions';

export const defaultPostsState = {
  posts: [],
  // posts: [
  //   {
  //     socialMedia: 'Facebook',
  //     socialAbbr: 'FB',
  //     icon: '',
  //     initial: 'J',
  //     caption: 'caption',
  //     timestamp: 'Sat 30 Oct, 6:00pm',
  //   },
  //   {
  //     socialMedia: 'Instagram',
  //     socialAbbr: 'IG',
  //     icon: '',
  //     initial: 'J',
  //     caption: 'test',
  //     timestamp: 'Sat 30 Oct, 9:00am',
  //   },
  // ],
  loading: true,
};

export const PostsReducer = (state = defaultPostsState, action) => {
  switch (action.type) {
    // case Actions.GET_ALL_POSTS: {
    //   const { loading } = action;

    //   return {
    //     ...state,
    //     loading,
    //   };
    // }

    case Actions.SET_ALL_POSTS: {
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
